/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex - rightIndex < 0) {
    if (!isAlphanumericCharacter(s[leftIndex])) {
      leftIndex++;
      continue;
    }
    if (!isAlphanumericCharacter(s[rightIndex])) {
      rightIndex--;
      continue;
    }
    if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }
  return true;
};

const isAlphanumericCharacter = (character) => {
  return /^[a-zA-Z0-9]+$/.test(character);
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("aa"));
