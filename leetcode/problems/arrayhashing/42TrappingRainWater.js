/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  let trapArea = 0;
  for (let leftWidth = 0; leftWidth < height.length; leftWidth++) {
    let currentHeight = height[leftWidth];
    const nextHeight = height[leftWidth + 1];
    if (currentHeight < nextHeight || nextHeight === undefined) {
      continue;
    }
    const trapHeight = currentHeight - nextHeight;
    for (
      let trapHeightUnit = 0;
      trapHeightUnit < trapHeight;
      trapHeightUnit++
    ) {
      if (trapHeightUnit > 0) {
        currentHeight--;
      }
      for (
        let rightWidth = leftWidth + 2;
        rightWidth < height.length;
        rightWidth++
      ) {
        const nextNextHeight = height[rightWidth];
        if (nextNextHeight < currentHeight) {
          continue;
        }
        const trapWidth = rightWidth - leftWidth - 1;
        trapArea = trapArea + trapWidth;
        break;
      }
    }
  }
  return trapArea;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
console.log(trap([5, 2, 1, 2, 1, 5]));
