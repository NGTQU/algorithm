/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let i = Math.round((left + right) / 2);

  while (nums[i] !== target) {
    if (nums[i] < target) {
      left = i;
    } else {
      right = i;
    }
    if (i === Math.round((left + right) / 2)) {
      // i must be right since it was rounded so we only need to check left
      if (nums[left] === target) {
        return left;
      }
      return -1;
    }
    i = Math.round((left + right) / 2);
  }

  return i;
};

console.log(search([-1, 0, 3, 5, 9, 12], 1));
console.log(search([2, 5], 2));
console.log(search([2, 5], 5));
