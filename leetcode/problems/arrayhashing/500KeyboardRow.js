/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (words) => {
  const firstRow = "qwertyuiop";
  const secondRow = "asdfghjkl";
  const thirdRow = "zxcvbnm";
  const results = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (word.length === 1) {
      results.push(words[i]);
      continue;
    }

    const char = word.charAt(0);

    if (firstRow.includes(char)) {
      for (let j = 1; j < word.length; j++) {
        if (!firstRow.includes(word.charAt(j))) {
          break;
        }

        if (j === word.length - 1) {
          results.push(words[i]);
        }
      }
      continue;
    }

    if (secondRow.includes(char)) {
      for (let j = 1; j < word.length; j++) {
        if (!secondRow.includes(word.charAt(j))) {
          break;
        }

        if (j === word.length - 1) {
          results.push(words[i]);
        }
      }
      continue;
    }

    if (thirdRow.includes(char)) {
      for (let j = 1; j < word.length; j++) {
        if (!thirdRow.includes(word.charAt(j))) {
          break;
        }

        if (j === word.length - 1) {
          results.push(words[i]);
        }
      }
      continue;
    }
  }

  return results;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
console.log(findWords(["a", "b"]));
