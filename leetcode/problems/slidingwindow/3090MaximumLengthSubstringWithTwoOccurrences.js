/**
 * @param {string} s
 * @return {number}
 */
const maximumLengthSubstring = (s) => {
  if (s.length <= 2) {
    return s.length;
  }

  const maxRight = s.length - 1;
  let left = 0;
  let right = 1;
  let count = 1;
  let max = 1;

  let occurence = {};
  occurence[s[left]] = 1;

  while (right <= maxRight) {
    if (occurence[s[right]] === undefined || occurence[s[right]] === 1) {
      occurence[s[right]] = occurence[s[right]] ? occurence[s[right]] + 1 : 1;
      right++;
      count++;
      max = Math.max(max, count);
      continue;
    }

    left++;
    right = left + 1;
    count = 1;

    occurence = {};
    occurence[s[left]] = 1;
  }

  return max;
};

console.log(maximumLengthSubstring("bcbbbcba"));
console.log(maximumLengthSubstring("aadaad"));
