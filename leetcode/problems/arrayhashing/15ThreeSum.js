const TARGET_SUM = 0;

const setNumToOccurrence = (num, occurrence) => {
  if (occurrence[Math.abs(num)] === undefined) {
    occurrence[Math.abs(num)] = 0;
  }
  occurrence[Math.abs(num)]++;
};

const convertNumsToOccurrence = (nums) => {
  const negativeOccurrence = {};
  const positiveOccurrence = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      setNumToOccurrence(nums[i], negativeOccurrence);
    } else {
      setNumToOccurrence(nums[i], positiveOccurrence);
    }
  }
  return {
    negativeOccurrence: negativeOccurrence,
    positiveOccurrence: positiveOccurrence,
  };
};

const convertPositiveToNegativeNumber = (num) => {
  return num * -1;
};

const convertOccurrenceToAssendingNums = (
  occurrence,
  isPositiveOccurrence = true
) => {
  const sortedNums = [];
  for (const property in occurrence) {
    for (let i = 0; i < occurrence[property]; i++) {
      isPositiveOccurrence
        ? sortedNums.push(Number(property))
        : sortedNums.unshift(convertPositiveToNegativeNumber(Number(property)));
    }
  }
  return sortedNums;
};

const isConsecutiveNum = (currentIndex, nums) => {
  return nums[currentIndex] === nums[currentIndex - 1];
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const occurrence = convertNumsToOccurrence(nums);
  const negativeOccurrence = occurrence.negativeOccurrence;
  const positiveOccurrence = occurrence.positiveOccurrence;

  const negativeNums = convertOccurrenceToAssendingNums(
    negativeOccurrence,
    false
  );
  const positiveNums = convertOccurrenceToAssendingNums(positiveOccurrence);
  const result = [];

  for (let i = 0; i < negativeNums.length; i++) {
    if (isConsecutiveNum(i, negativeNums)) {
      continue;
    }
    const firstNum = negativeNums[i];
    for (let j = 0; j < positiveNums.length; j++) {
      if (isConsecutiveNum(j, positiveNums)) {
        continue;
      }
      const secondNum = positiveNums[j];
      const thirdNum = TARGET_SUM - firstNum - secondNum;
      const isThirdNumExist =
        thirdNum < 0
          ? thirdNum !== firstNum
            ? negativeOccurrence[Math.abs(thirdNum)] && thirdNum > firstNum
            : negativeOccurrence[Math.abs(thirdNum)] > 1
          : thirdNum !== secondNum
          ? positiveOccurrence[thirdNum] && thirdNum > secondNum
          : positiveOccurrence[thirdNum] > 1;

      if (isThirdNumExist) {
        result.push([firstNum, secondNum, thirdNum]);
      }
    }
  }

  if (positiveNums[0] + positiveNums[1] + positiveNums[2] === TARGET_SUM) {
    result.push([positiveNums[0], positiveNums[1], positiveNums[2]]);
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
