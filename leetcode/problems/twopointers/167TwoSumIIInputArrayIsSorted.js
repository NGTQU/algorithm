/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let startIndex = 0;
  let endIndex = numbers.length - 1;
  let result;
  while (result === undefined) {
    const sum = numbers[startIndex] + numbers[endIndex];
    if (sum > target) {
      endIndex--;
      continue;
    }
    if (sum < target) {
      startIndex++;
      continue;
    }
    result = [startIndex + 1, endIndex + 1];
  }
  return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
