/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const occurrence = {};
  for (let i = 0; i < nums.length; i++) {
    if (occurrence[nums[i]]) return true;
    occurrence[nums[i]] = true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3]));
console.log(containsDuplicate([1, 2, 2]));
