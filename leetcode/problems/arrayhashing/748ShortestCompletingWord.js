/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = (licensePlate, words) => {
  const isLettersOnly = (str) => /^[A-Za-z]+$/.test(str);
  const licensePlateWords = [];

  for (let i = 0; i < licensePlate.length; i++) {
    if (isLettersOnly(licensePlate[i])) {
      licensePlateWords.push(licensePlate[i].toLocaleLowerCase());
    }
  }

  const validWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j <= licensePlateWords.length; j++) {
      if (j === licensePlateWords.length) {
        validWords.push(words[i]);
      }
      if (word.includes(licensePlateWords[j])) {
        word = word.replace(licensePlateWords[j], "");
        continue;
      }
      break;
    }
  }

  let validWord;

  for (let i = 0; i < validWords.length; i++) {
    if (validWord === undefined || validWords[i].length < validWord.length) {
      validWord = validWords[i];
    }
  }

  return validWord;
};

console.log(
  shortestCompletingWord("Ah71752", [
    "suggest",
    "letter",
    "of",
    "husband",
    "easy",
    "education",
    "drug",
    "prevent",
    "writer",
    "old",
  ]),
);
console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]),
);
