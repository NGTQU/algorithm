/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = (nums) => {
  const countElement = majorityElement(nums);
  let startIndex;
  let endIndex;
  let shortest;

  for (let count = 0; count < countElement.length; count++) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === countElement[count]) {
        if (startIndex === undefined) {
          startIndex = i;
          continue;
        }

        endIndex = i;
      }
    }

    if (shortest === undefined) {
      shortest = endIndex ? endIndex - startIndex + 1 : 1;
    } else {
      shortest = Math.min(shortest, endIndex ? endIndex - startIndex + 1 : 1);
    }

    startIndex = undefined;
    endIndex = undefined;
  }

  return shortest;
};

const majorityElement = (nums) => {
  const occurence = {};
  let majorityOccurence = 0;
  let majorityElement = [];

  for (let i = 0; i < nums.length; i++) {
    if (occurence[nums[i]] === undefined) {
      occurence[nums[i]] = 1;
    } else {
      occurence[nums[i]] = occurence[nums[i]] + 1;
    }

    if (occurence[nums[i]] > majorityOccurence) {
      majorityOccurence = occurence[nums[i]];
      majorityElement = [nums[i]];
    }

    if (
      occurence[nums[i]] === majorityOccurence &&
      majorityElement[majorityElement.length - 1] !== nums[i]
    ) {
      majorityElement.push(nums[i]);
    }
  }

  return majorityElement;
};

console.log(findShortestSubArray([2, 1]));
console.log(findShortestSubArray([2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]));
console.log(findShortestSubArray([1, 1]));
console.log(findShortestSubArray([1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1]));
