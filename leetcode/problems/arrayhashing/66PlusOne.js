/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    const plusOne = digits[i] + 1;

    if (plusOne < 10) {
      digits[i] = plusOne;
      return digits;
    }

    digits[i] = plusOne % 10;
  }
  return [1].concat(digits);
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
