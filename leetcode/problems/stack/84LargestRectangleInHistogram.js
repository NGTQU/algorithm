/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = (heights) => {
  let largestRectangleArea = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) {
      continue;
    }

    let width = 1;
    let left = i - 1;
    while (heights[left] !== undefined && heights[left] >= heights[i]) {
      width++;
      left--;
    }

    let right = i + 1;
    while (heights[right] !== undefined && heights[right] >= heights[i]) {
      width++;
      right++;
    }

    if (largestRectangleArea < heights[i] * width) {
      largestRectangleArea = heights[i] * width;
    }
  }

  return largestRectangleArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
console.log(largestRectangleArea([2, 4]));
