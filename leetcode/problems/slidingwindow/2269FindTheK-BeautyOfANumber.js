/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
const divisorSubstrings = (num, k) => {
  const string = num.toString();
  const maxRight = string.length - 1;
  let left = 0;
  let right = k - 1;
  let count = 0;

  while (right <= maxRight) {
    if (isDivisor(string.slice(left, right + 1), string)) {
      count++;
    }

    left++;
    right++;
  }

  return count;
};

const isDivisor = (dividendSubstring, divisorString) => {
  return Number(divisorString) % Number(dividendSubstring) === 0;
};
