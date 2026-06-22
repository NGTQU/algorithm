/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = (nums) => {
  const output = [];
  let start;
  for (let i = 0; i < nums.length; i++) {
    if (start === undefined) {
      start = nums[i];
    }
    if (nums[i] === nums[i + 1] - 1) {
      continue;
    }
    if (start === nums[i]) {
      output.push(start.toString());
    } else {
      output.push(start.toString().concat("->").concat(nums[i].toString()));
    }
    start = undefined;
  }
  return output;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
