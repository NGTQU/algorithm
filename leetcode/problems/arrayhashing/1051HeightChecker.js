/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = (heights) => {
  const sortedHeights = heights.toSorted((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      count++;
    }
  }

  return count;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
