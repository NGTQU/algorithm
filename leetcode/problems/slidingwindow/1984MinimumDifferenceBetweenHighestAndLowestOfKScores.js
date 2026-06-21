/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = (nums, k) => {
  nums.sort((a, b) => a - b);
  const length = nums.length;
  let minimumDifference = 0;

  if (length === 1) {
    return minimumDifference;
  }

  const maxRight = length - 1;
  let left = 0;
  let right = k - 1;

  minimumDifference = difference(nums[left], nums[right]);

  left++;
  right++;

  while (right <= maxRight) {
    minimumDifference = Math.min(
      minimumDifference,
      difference(nums[left], nums[right]),
    );

    left++;
    right++;
  }

  return minimumDifference;
};

const difference = (firstValue, secondValue) => {
  return Math.abs(secondValue - firstValue);
};

console.log(minimumDifference([9, 4, 1, 7], 2));
