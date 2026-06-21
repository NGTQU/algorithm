/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const longestAlternatingSubarray = (nums, threshold) => {
  if (nums.length === 1) {
    return isValidLeftNum(nums[0], threshold) ? 1 : 0;
  }

  const maxIndex = nums.length - 1;
  let left = 0;
  let right = 1;
  let count = 0;
  let max = 0;

  while (left <= maxIndex && right <= maxIndex) {
    if (!isValidLeftNum(nums[left], threshold)) {
      left++;
      continue;
    }

    if (count === 0) {
      count = 1;
      max = Math.max(max, count);
    }

    if (right <= left) {
      right = left + 1;
    }

    if (isValidRightNum(nums[right - 1], nums[right], threshold)) {
      count++;
      max = Math.max(max, count);
      right++;
      continue;
    }

    left = right;
    right = left + 1;
    count = 0;
  }

  return max;
};

const isValidLeftNum = (leftNum, threshold) => {
  return leftNum <= threshold && leftNum % 2 === 0;
};

const isValidRightNum = (previousRightNum, rightNum, threshold) => {
  return rightNum <= threshold && (previousRightNum + rightNum) % 2 === 1;
};

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5));
console.log(longestAlternatingSubarray([1, 2], 2));
console.log(longestAlternatingSubarray([2], 2));
console.log(longestAlternatingSubarray([1], 1));
console.log(longestAlternatingSubarray([1, 3], 16));
