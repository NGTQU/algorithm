/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const requiredOccurence = nums.length / 2;
  const occurence = {};

  for (let i = 0; i < nums.length; i++) {
    if (occurence[nums[i]] === undefined) {
      occurence[nums[i]] = 1;
    } else {
      occurence[nums[i]] = occurence[nums[i]] + 1;
    }

    if (occurence[nums[i]] > requiredOccurence) {
      return nums[i];
    }
  }
};
