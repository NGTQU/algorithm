/**
 * lhs longest harmonious subsequence
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  nums.sort((a, b) => a - b);

  const maxRight = nums.length - 1;
  let left = 0;
  let right = left + 1;
  let lhs = 0;
  let newLeft;

  while (right <= maxRight) {
    if (nums[left] === nums[right]) {
      right++;
      continue;
    }

    if (isHarmoniousSubsequence(nums[left], nums[right])) {
      if (newLeft === undefined) {
        newLeft = right;
      }
      if (isHarmoniousSubsequence(nums[left], nums[right + 1])) {
        right++;
        continue;
      }
      lhs = Math.max(lhs, right - left + 1);
      left = newLeft;
      newLeft = undefined;
      right = right + 1;
    } else {
      left = right;
      right = left + 1;
    }
  }

  return lhs;
};

const isHarmoniousSubsequence = (minNum, maxNum) => {
  if (Math.abs(maxNum - minNum) === 1) return true;
  return false;
};

console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(
  findLHS([
    10, 5, 6, 5, 8, 2, 1, 0, 4, 4, 1, 9, 8, 5, 7, 7, 8, 10, 8, 10, 5, 0, 7, 9,
    10, 6, 2, 2, 9, 4, 10, 7, 2, 10, 7, 3, 4, 9, 2, 0, 5, 9, 4, 9, 5, 2, 0, 3,
    7, 7, 4, 10, 7, 9, 4, -10, 3, 8, 5, 10, 6, 4, 3, 2, 0, 7, 6, 10, 6, 8, 4, 1,
    8, 9,
  ]),
);
