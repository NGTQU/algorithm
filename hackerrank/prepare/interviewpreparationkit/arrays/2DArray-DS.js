const hourglassSum = (arr) => {
  // Write your code here
  let horizontalIndex = 0;
  let verticalIndex = 0;
  let sum = 0;
  let maxSum;
  while (horizontalIndex < 4) {
    sum =
      arr[verticalIndex][horizontalIndex] +
      arr[verticalIndex][horizontalIndex + 1] +
      arr[verticalIndex][horizontalIndex + 2] +
      arr[verticalIndex + 1][horizontalIndex + 1] +
      arr[verticalIndex + 2][horizontalIndex] +
      arr[verticalIndex + 2][horizontalIndex + 1] +
      arr[verticalIndex + 2][horizontalIndex + 2];
    if (maxSum === undefined || maxSum < sum) {
      maxSum = sum;
    }
    if (horizontalIndex === 3 && verticalIndex !== 3) {
      horizontalIndex = 0;
      verticalIndex++;
    } else {
      horizontalIndex++;
    }
  }
  return maxSum;
};
console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
);
console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ])
);
console.log(
  hourglassSum([
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ])
);
