/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  let count = 0;
  const stringsLength = strs.length;
  const charsLength = strs[0].length;

  for (let charIndex = 0; charIndex < charsLength; charIndex++) {
    for (let stringIndex = 1; stringIndex < stringsLength; stringIndex++) {
      const string = strs[stringIndex];
      const previousString = strs[stringIndex - 1];
      if (string.charAt(charIndex) < previousString.charAt(charIndex)) {
        count++;
        break;
      }
    }
  }

  return count;
};
