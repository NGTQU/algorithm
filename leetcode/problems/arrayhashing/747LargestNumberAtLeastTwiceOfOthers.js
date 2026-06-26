/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = (nums) => {
  let firstIndex;
  let firstMax;
  let secondMax;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === firstMax) {
      continue;
    }

    if (nums[i] > firstMax || firstMax === undefined) {
      secondMax = firstMax;
      firstMax = nums[i];
      firstIndex = i;
      continue;
    }

    if (nums[i] === secondMax) {
      continue;
    }

    if (nums[i] > secondMax || secondMax === undefined) {
      secondMax = nums[i];
      continue;
    }
  }

  if (firstMax !== undefined && secondMax !== undefined) {
    return firstMax / 2 >= secondMax ? firstIndex : -1;
  }

  return -1;
};
