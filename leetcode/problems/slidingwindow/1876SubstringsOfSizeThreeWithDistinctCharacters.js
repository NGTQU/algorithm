/**
 * @param {string} s
 * @return {number}
 */
const countGoodSubstrings = (s) => {
  const maxRight = s.length - 1;
  let left = 0;
  let right = 2;
  let count = 0;

  while (right <= maxRight) {
    if (isStringGood(s.slice(left, right + 1))) {
      count++;
    }

    left++;
    right++;
  }

  return count;
};

const isStringGood = (s) => {
  const occurrence = {};

  for (let i = 0; i < s.length; i++) {
    if (occurrence[s[i]]) return false;
    occurrence[s[i]] = true;
  }

  return true;
};
