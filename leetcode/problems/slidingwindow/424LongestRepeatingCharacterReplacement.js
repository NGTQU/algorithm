/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
  let currentIndex = 1;
  let compareIndex = 0;
  let currentLength = 1;
  let replacementLength = k;
  let maxLength = 1;
  while (currentIndex < s.length) {
    if (compareIndex === undefined) {
      if (s[currentIndex] === s[currentIndex - 1]) {
        currentIndex++;
        continue;
      }
      compareIndex = currentIndex;
      currentIndex++;
      currentLength = 1;
      replacementLength = k;
    }
    if (s[currentIndex] === s[compareIndex]) {
      currentLength++;
    } else {
      if (replacementLength !== 0) {
        currentLength++;
        replacementLength--;
      } else {
        currentIndex = compareIndex + 1;
        compareIndex = undefined;
        continue;
      }
    }
    if (currentIndex === s.length - 1) {
      if (replacementLength !== 0) {
        currentLength += Math.min(compareIndex, replacementLength);
      }
      currentIndex = compareIndex;
      compareIndex = undefined;
    }
    if (maxLength < currentLength) {
      maxLength = currentLength;
    }
    currentIndex++;
  }
  return maxLength;
};

console.log(characterReplacement("ABCDDD", 3));
console.log(characterReplacement("CADBBB", 4));
console.log(
  characterReplacement(
    "IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR",
    2
  )
);
console.log(characterReplacement("ABAA", 0));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABBB", 2));
