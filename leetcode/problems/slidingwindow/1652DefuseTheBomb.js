/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = (code, k) => {
  if (k === 0) {
    return code.map((value) => 0);
  }

  const initialIndex = k > 0 ? 1 : code.length - Math.abs(k);
  const initialCode = code.slice(initialIndex);

  const requiredLength = code.length + Math.abs(k);
  const repeatedTimes = Math.ceil(
    (requiredLength - initialCode.length) / code.length,
  );

  let requiredCode = initialCode;

  for (let i = 1; i <= repeatedTimes; i++) {
    requiredCode = requiredCode.concat(code);
  }

  let left = 0;
  let right = left + Math.abs(k) - 1;

  return code.map((value, index) => {
    const sum = requiredCode
      .slice(left, right + 1)
      .reduce((total, value) => total + value, 0);

    left++;
    right++;

    return sum;
  });
};

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
