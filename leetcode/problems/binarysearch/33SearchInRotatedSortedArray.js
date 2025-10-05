/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];
  let left = 0;
  let right = nums.length - 1;

  if (firstNum > lastNum) {
    const minIndex = findMinIndex(nums);
    if (firstNum <= target) {
      right = minIndex - 1;
    } else {
      left = minIndex;
    }
  }

  let index = Math.ceil((left + right) / 2);

  while (nums[index] !== target) {
    if (nums[index] < target) {
      left = index;
    } else {
      right = index;
    }
    if (index === Math.ceil((left + right) / 2)) {
      if (nums[left] === target) {
        return left;
      }
      return -1;
    }
    index = Math.ceil((left + right) / 2);
  }

  return index;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMinIndex = (nums) => {
  const firstNum = nums[0];
  let left = 0;
  let right = nums.length - 1;
  let index = Math.ceil((left + right) / 2);

  while (true) {
    if (nums[index] < nums[index + 1] || nums[index + 1] === undefined) {
      if (nums[index] > firstNum) {
        left = index;
      } else {
        right = index;
      }
      if (index === Math.ceil((left + right) / 2)) {
        return left + 1;
      }
      index = Math.ceil((left + right) / 2);
    } else {
      return index + 1;
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([5, 1, 3], 3));
console.log(search([3, 1], 3));
