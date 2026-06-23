/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  let count = 1;
  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
      continue;
    }
    max = Math.max(max, count);
    count = 1;
  }

  return Math.max(max, count);
};
