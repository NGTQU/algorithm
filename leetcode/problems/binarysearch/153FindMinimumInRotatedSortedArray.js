/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = (nums) => {
  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];

  if (firstNum <= lastNum) {
    return firstNum;
  } else {
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
          return nums[left + 1];
        }
        index = Math.ceil((left + right) / 2);
      } else {
        return nums[index + 1];
      }
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([1]));
console.log(findMin([2, 1]));
console.log(findMin([3, 1, 2]));
