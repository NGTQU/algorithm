/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = (nums) => {
  let current = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      current++;
      continue;
    }

    max = Math.max(max, current);
    current = 0;
  }

  max = Math.max(max, current);

  return max;
};
