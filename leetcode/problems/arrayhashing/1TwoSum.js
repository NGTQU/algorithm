/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const occurrence = {};
  for (let i = 0; i < nums.length; i++) {
    occurrence[nums[i]]
      ? occurrence[nums[i]].push(i)
      : (occurrence[nums[i]] = [i]);
  }
  for (const property in occurrence) {
    const pairProperty = String(target - Number(property));
    if (occurrence[pairProperty]) {
      if (property !== pairProperty) {
        return occurrence[property].concat(occurrence[pairProperty]);
      } else if (occurrence[pairProperty].length === 2) {
        return occurrence[property];
      }
    }
  }
};

console.log(twoSum([3, 2, 3]));
console.log("testing again");
