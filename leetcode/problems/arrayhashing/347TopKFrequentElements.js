/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  let minFrequency = nums.length;
  let maxFrequency = 0;
  const occurrennce = {};

  for (let i = 0; i < nums.length; i++) {
    occurrennce[nums[i]] = (occurrennce[nums[i]] ?? 0) + 1;
    if (occurrennce[nums[i]] < minFrequency)
      minFrequency = occurrennce[nums[i]];
    if (occurrennce[nums[i]] > maxFrequency)
      maxFrequency = occurrennce[nums[i]];
  }

  const frequency = {};

  for (property in occurrennce) {
    if (frequency[occurrennce[property]] !== undefined) {
      frequency[occurrennce[property]].push(Number(property));
    } else {
      frequency[occurrennce[property]] = [Number(property)];
    }
  }

  let results = [];
  let count = k;

  for (let i = maxFrequency; i >= minFrequency; i--) {
    if (count === 0) break;
    console.log(frequency[i]);
    if (frequency[i] !== undefined) {
      results = results.concat(frequency[i]);
      count = count - frequency[i].length;
    }
  }

  return results;
};

console.log(topKFrequent([6, 6, 6, 5, 5, 4], 2));
