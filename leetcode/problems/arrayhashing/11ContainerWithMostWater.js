const area = (
  firstHorizontal,
  secondHorizontal,
  firstVertical,
  secondVertical
) => {
  return (
    Math.abs(secondHorizontal - firstHorizontal) *
    (secondVertical > firstVertical ? firstVertical : secondVertical)
  );
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let maxArea = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;
  let leftHeight = height[leftIndex];
  let rightHeight = height[rightIndex];

  while (leftIndex !== rightIndex) {
    const newLeftHeight = height[leftIndex];
    if (newLeftHeight < leftHeight) {
      leftIndex++;
      continue;
    }
    if (newLeftHeight > leftHeight) {
      leftHeight = newLeftHeight;
    }

    const newRightHeight = height[rightIndex];
    if (newRightHeight < rightHeight) {
      rightIndex--;
      continue;
    }
    if (newRightHeight > rightHeight) {
      rightHeight = newRightHeight;
    }

    const currentArea = area(leftIndex, rightIndex, leftHeight, rightHeight);
    if (maxArea < currentArea) {
      maxArea = currentArea;
    }

    if (leftHeight < rightHeight) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
