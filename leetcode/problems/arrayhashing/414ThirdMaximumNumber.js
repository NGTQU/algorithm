/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = (nums) => {
  let firstMax;
  let secondMax;
  let thirdMax;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === firstMax) {
      continue;
    }

    if (nums[i] > firstMax || firstMax === undefined) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[i];
      continue;
    }

    if (nums[i] === secondMax) {
      continue;
    }

    if (nums[i] > secondMax || secondMax === undefined) {
      thirdMax = secondMax;
      secondMax = nums[i];
      continue;
    }

    if (nums[i] === thirdMax) {
      continue;
    }

    if (nums[i] > thirdMax || thirdMax === undefined) {
      thirdMax = nums[i];
    }
  }

  if (
    firstMax !== undefined &&
    secondMax !== undefined &&
    thirdMax !== undefined
  ) {
    return Math.min(firstMax, secondMax, thirdMax);
  }

  if (firstMax !== undefined && secondMax !== undefined) {
    Math.max(firstMax, secondMax);
  }

  return Math.max(firstMax);
};

console.log(thirdMax([3, 3, 4, 3, 4, 3, 0, 3, 3]));
console.log(thirdMax([1, 1, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([3, 2, 1]));
