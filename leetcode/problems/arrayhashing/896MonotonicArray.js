/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isMonotonic = (nums) => {
  let isAscending;
  let isDescending;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }

    if (nums[i] < nums[i + 1]) {
      if (isDescending) {
        return false;
      }
      isAscending = true;
    }

    if (nums[i] > nums[i + 1]) {
      if (isAscending) {
        return false;
      }
      isDescending = true;
    }
  }

  return true;
};
