/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const leftSideProducts = [];
  const numsFirstIndex = 0;
  const numsLastIndex = nums.length - 1;
  let numsCurrentIndex;
  let numsPreviousIndex;

  for (let i = numsFirstIndex; i < numsLastIndex; i++) {
    numsCurrentIndex = i;
    numsPreviousIndex = numsCurrentIndex - 1;
    leftSideProducts.push([nums[numsCurrentIndex]]);
    leftSideProducts[numsCurrentIndex][0] =
      (leftSideProducts[numsPreviousIndex] ?? 1) *
      leftSideProducts[numsCurrentIndex][0];
  }

  const rightSideProducts = [];

  for (let i = numsLastIndex; i > numsFirstIndex; i--) {
    numsCurrentIndex = numsLastIndex - i;
    numsPreviousIndex = numsCurrentIndex - 1;
    rightSideProducts.push([nums[i]]);
    rightSideProducts[numsCurrentIndex][0] =
      (rightSideProducts[numsPreviousIndex] ?? 1) *
      rightSideProducts[numsCurrentIndex][0];
  }

  const results = [];
  let leftSideProductsCurrentIndex;
  let rightSideProductsCurrentIndex;

  for (let i = numsFirstIndex; i <= numsLastIndex; i++) {
    leftSideProductsCurrentIndex = i - 1;
    rightSideProductsCurrentIndex = numsLastIndex - 1 - i;
    results.push(
      (leftSideProducts[leftSideProductsCurrentIndex] ?? 1) *
        (rightSideProducts[rightSideProductsCurrentIndex] ?? 1)
    );
  }

  return results;
};

console.log(productExceptSelf([1, 2, 3, 4]));
