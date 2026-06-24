/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const occurence = {};
  const disappearedNumbers = [];

  for (let i = 0; i < nums.length; i++) {
    occurence[nums[i]] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (occurence[i] === undefined) {
      disappearedNumbers.push(i);
    }
  }

  return disappearedNumbers;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
