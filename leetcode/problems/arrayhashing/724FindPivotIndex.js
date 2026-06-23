/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    leftSum += nums[i - 1] ?? 0;
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
