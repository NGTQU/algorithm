/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  const maxRight = nums.length - 1;
  let left = 0;
  let right = left + k - 1;

  let currentSum = nums
    .slice(left, right + 1)
    .reduce((total, num) => total + num, 0);
  let maxSum = currentSum;

  left++;
  right++;

  while (right <= maxRight) {
    currentSum = currentSum - nums[left - 1] + nums[right];
    maxSum = Math.max(maxSum, currentSum);

    left++;
    right++;
  }

  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
