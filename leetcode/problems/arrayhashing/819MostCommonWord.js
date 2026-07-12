/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  const separators = [" ", ",", ";", ":", ".", "!", "?", "'", '""'];
  let startIndex;
  let endIndex;

  const occurence = {};
  let maxOccurence = 0;
  let maxOccurenceWord;

  for (let i = 0; i < paragraph.length; i++) {
    if (startIndex === undefined) {
      startIndex = i;
    }

    if (
      !separators.includes(paragraph.charAt(i)) &&
      i !== paragraph.length - 1
    ) {
      continue;
    }

    endIndex =
      !separators.includes(paragraph.charAt(i)) && i === paragraph.length - 1
        ? paragraph.length
        : i;
    const word = paragraph.slice(startIndex, endIndex).toLowerCase();

    if (startIndex === endIndex || banned.includes(word)) {
      startIndex = undefined;
      endIndex = undefined;
      continue;
    }

    if (occurence[word] === undefined) {
      occurence[word] = 1;
    } else {
      occurence[word] = occurence[word] + 1;
    }

    if (maxOccurence < occurence[word]) {
      maxOccurence = occurence[word];
      maxOccurenceWord = word;
    }

    startIndex = undefined;
    endIndex = undefined;
  }

  return maxOccurenceWord;
};

console.log(mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]));
console.log(mostCommonWord("Bob", []));
console.log(
  mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", [
    "hit",
  ]),
);
