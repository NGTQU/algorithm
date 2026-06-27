/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const addToArrayForm = (nums, k) => {
  let sum = k;
  for (let i = nums.length - 1; i >= 0; i--) {
    sum = nums[i] + sum;
    nums[i] = sum % 10;
    sum = Math.trunc(sum / 10);
  }

  if (sum === 0) {
    return nums;
  }

  const digits = [];
  let length = sum.toString().length;
  while (length !== 0) {
    const power = Math.pow(10, length - 1);
    const digit = Math.trunc(sum / power);
    digits.push(digit);
    sum = sum % power;
    length--;
  }

  return digits.concat(nums);
};

console.log(addToArrayForm([0], 10000));
