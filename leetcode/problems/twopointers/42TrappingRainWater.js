/**
 * @param {number[]} heights
 * @return {number}
 */
const trap = (heights) => {
  let water = 0;
  let left = 0;
  let right = heights.length - 1;
  let leftMax = heights[left];
  let rightMax = heights[right];

  while (left !== right) {
    if (leftMax < rightMax) {
      left++;
      if (leftMax < heights[left]) {
        leftMax = heights[left];
      }
      water = water + (leftMax - heights[left]);
    } else {
      right--;
      if (rightMax < heights[right]) {
        rightMax = heights[right];
      }
      water = water + (rightMax - heights[right]);
    }
  }

  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([5, 2, 1, 2, 1, 5]));
console.log(trap([0, 2, 0]));
console.log(trap([4, 2, 3]));
