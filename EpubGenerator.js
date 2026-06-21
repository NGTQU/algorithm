function extractNumber(url) {
  const match = url.match(/chuong[-_]?(\d+)/i);
  if (match) {
    return Number(match[1] || match[2]) || 0;
  }
  return 0;
}

function sortAndFilterLinks(links) {
  const uniqueLinks = Array.from(new Set(links));
  uniqueLinks.sort((a, b) => {
    const numA = extractNumber(a);
    const numB = extractNumber(b);
    return numA - numB;
  });

  return uniqueLinks;
}

async function collectAllLinks(startUrl) {
  const visitedPages = new Set();
  const collectedLinks = new Set();
  let currentUrl = startUrl;

  while (currentUrl && !visitedPages.has(currentUrl)) {
    console.log("Scanning page:", currentUrl);
    visitedPages.add(currentUrl);
    const res = await fetch(currentUrl);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    [...doc.querySelectorAll('a[href*="chuong"]')]
      .map((a) => a.href)
      .forEach((href) => collectedLinks.add(href));
    const nextPageLink = [...doc.querySelectorAll('a[href*="?page="]')]
      .map((a) => a.href)
      .find((href) => !visitedPages.has(href));
    currentUrl = nextPageLink || null;

    await new Promise((r) => setTimeout(r, 500)); // be polite
  }

  return [...collectedLinks];
}

function convertHTMLtoXHTML(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  temp.querySelectorAll("br").forEach((br) => {
    const fixed = document.createElement("br");
    br.replaceWith(fixed);
  });
  temp.querySelectorAll("p").forEach((p) => {
    if (!p.textContent.trim()) p.remove();
  });
  temp.querySelectorAll("p").forEach((p) => {
    const children = [...p.childNodes];
    if (children.length === 1 && children[0].nodeName === "BR") {
      p.remove();
    }
  });
  temp.querySelectorAll("img").forEach((img) => {
    const fixed = document.createElement("img");
    [...img.attributes].forEach((attr) =>
      fixed.setAttribute(attr.name, attr.value)
    );
    img.replaceWith(fixed);
  });

  return temp.innerHTML
    .replace(/<br\s*>/gi, "<br />")
    .replace(/<hr\s*>/gi, "<hr />")
    .replace(/&nbsp;/g, "&#160;")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<img([^>]*?)>/gi, "<img$1 />");
}

(async () => {
  const BOOK_TITLE = "Ma Đạo Tổ Sư";
  const AUTHOR = "Mặc Hương Đồng Xú";
  // const LINK_FILTER = (href) => href.includes("chuong");
  const CONTENT_SELECTORS = [".book-list.full-story.content.chapter-c"];
  if (!window.JSZip) {
    await new Promise((resolve) => {
      const s = document.createElement("script");
      s.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }

  const allLinks = await collectAllLinks(
    "https://metruyenhot.me/ma-dao-to-su/"
  );
  const links = sortAndFilterLinks(
    allLinks.filter((href) => /chuong/i.test(href))
  );
  // const links = [
  //   ...new Set(
  //     [...document.querySelectorAll("a[href]")]
  //       .map((a) => a.href)
  //       .filter((href) => LINK_FILTER(href))
  //   ),
  // ];
  if (!links.length) {
    console.error("No links found.");
    return;
  }

  console.log(`Found ${links.length} links. Fetching pages...`);
  const chapters = [];
  for (let i = 0; i < links.length; i++) {
    try {
      console.log(`Fetching page ${i + 1}/${links.length}:`, links[i]);
      const res = await fetch(links[i]);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      let contentEl = null;

      for (const selector of CONTENT_SELECTORS) {
        contentEl = doc.querySelector(selector);
        if (contentEl) break;
      }
      if (!contentEl) continue;

      contentEl
        .querySelectorAll("script, style, nav, footer, header, ads, iframe")
        .forEach((e) => e.remove());
      chapters.push({
        title: doc.title || `Trang ${i + 1}`,
        content: convertHTMLtoXHTML(contentEl.innerHTML),
      });

      await new Promise((r) => setTimeout(r, 300)); // be polite to the server
    } catch (e) {
      console.error("Skipped:", links[i], e);
    }
  }

  console.log("Building EPUB...");
  const zip = new JSZip();
  zip.file("mimetype", "application/epub+zip");
  zip.folder("META-INF").file(
    "container.xml",
    `<?xml version="1.0"?>
    <container version="1.0"
      xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
      <rootfiles>
        <rootfile full-path="OEBPS/content.opf"
          media-type="application/oebps-package+xml"/>
      </rootfiles>
    </container>`
  );
  const oebps = zip.folder("OEBPS");
  let manifest = "";
  let spine = "";
  chapters.forEach((chapter, i) => {
    const fname = `chapter${i + 1}.xhtml`;
    oebps.file(
      fname,
      `<?xml version="1.0" encoding="utf-8"?>
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>${chapter.title}</title>
      </head>
      <body>
        <h1>${chapter.title}</h1>
        ${chapter.content}
      </body>
      </html>`
    );
    manifest += `<item id="c${i}" href="${fname}" media-type="application/xhtml+xml"/>\n`;
    spine += `<itemref idref="c${i}"/>\n`;
  });
  oebps.file(
    "content.opf",
    `<?xml version="1.0" encoding="utf-8"?>
    <package xmlns="http://www.idpf.org/2007/opf" version="3.0">
      <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
        <dc:title>${BOOK_TITLE}</dc:title>
        <dc:creator>${AUTHOR}</dc:creator>
        <dc:language>vi</dc:language>
      </metadata>
      <manifest>
        ${manifest}
      </manifest>
      <spine>
        ${spine}
      </spine>
    </package>`
  );

  const blob = await zip.generateAsync({ type: "blob" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${BOOK_TITLE}.epub`;
  a.click();

  console.log("Downloaded EPUB successfully!");
})();
