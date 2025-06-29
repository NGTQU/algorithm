/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
  const negativeOccurence = {};
  const positiveOccurence = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negativeOccurence[nums[i] * -1] = true;
    } else {
      positiveOccurence[nums[i]] = true;
    }
  }
  const sortedNums = [];
  for (const property in negativeOccurence) {
    sortedNums.unshift(Number(property) * -1);
  }
  for (const property in positiveOccurence) {
    sortedNums.push(Number(property));
  }
  let currentConsecutive = 0;
  let longestConsecutive = 0;
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1] - 1) {
      if (currentConsecutive === 0) {
        currentConsecutive = 1;
      }
      currentConsecutive++;
    } else {
      if (longestConsecutive < currentConsecutive) {
        longestConsecutive = currentConsecutive;
      }
      currentConsecutive = 1;
    }
  }
  if (longestConsecutive < currentConsecutive) {
    longestConsecutive = currentConsecutive;
  }
  return longestConsecutive;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(
  longestConsecutive([
    4, 0, -4, -2, 2, 5, 2, 0, -8, -8, -8, -8, -1, 7, 4, 5, 5, -4, 6, 6, -3,
  ])
);
console.log(longestConsecutive([]));
console.log(longestConsecutive([1]));
