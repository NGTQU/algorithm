/**
 * @param {number[]} nums
 * @return {number}
 */
const repeatedNTimes = (nums) => {
  nums.sort((a, b) => a - b);

  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      count = 1;
      continue;
    }
    count++;
    if (count === nums.length / 2) {
      return nums[i];
    }
  }
};
