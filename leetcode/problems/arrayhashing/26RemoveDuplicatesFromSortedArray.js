/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const uniqueNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    uniqueNums.push(nums[i]);
  }

  while (nums.length != uniqueNums.length) {
    nums.pop();
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = uniqueNums[i];
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
