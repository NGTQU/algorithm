/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
const numberOfLines = (widths, s) => {
  const alphabetWidths = toAlphabetWidths(widths);
  const maxWidth = 100;
  let width = 0;
  let count = 0;
  let lastLineWidth = 0;

  for (let i = 0; i < s.length; i++) {
    if (width + alphabetWidths[s.charAt(i)] <= maxWidth) {
      width = width + alphabetWidths[s.charAt(i)];
      continue;
    }

    count++;
    width = alphabetWidths[s.charAt(i)];
  }

  count++;
  lastLineWidth = width;

  return [count, lastLineWidth];
};

const toAlphabetWidths = (widths) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const alphabetWidths = {};

  for (let i = 0; i < widths.length; i++) {
    alphabetWidths[alphabet[i]] = widths[i];
  }

  return alphabetWidths;
};

console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa",
  ),
);
