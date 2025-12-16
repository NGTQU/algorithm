/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let occurrence = {};
  let substringLength = 0;
  let longestSubstringLength = 0;
  let substringIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (occurrence[s[i]] != undefined && occurrence[s[i]] >= substringIndex) {
      substringLength = i - occurrence[s[i]];
      substringIndex = occurrence[s[i]] + 1;
    } else {
      substringLength++;
    }
    occurrence[s[i]] = i;
    if (longestSubstringLength < substringLength) {
      longestSubstringLength = substringLength;
    }
  }
  return longestSubstringLength;
};

console.log(lengthOfLongestSubstring("abba"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("dvdf"));
