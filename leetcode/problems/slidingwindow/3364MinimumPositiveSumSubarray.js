/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
const minimumSumSubarray = (nums, l, r) => {
  let minimumSum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j - i + 1 <= r; j++) {
      currentSum += nums[j];
      if (j - i + 1 >= l && currentSum > 0 && currentSum < minimumSum) {
        minimumSum = currentSum;
      }
    }
  }
  return minimumSum === Infinity ? -1 : minimumSum;
};
