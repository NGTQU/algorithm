/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;
  let i = Math.round((left + right) / 2);

  let mn = get2DIndexFrom1DIndex(matrix, i);
  let m = mn[0];
  let n = mn[1];

  while (matrix[m][n] !== target) {
    if (matrix[m][n] < target) {
      left = i;
    } else {
      right = i;
    }
    if (i === Math.round((left + right) / 2)) {
      // i must be right since it was rounded so we only need to check left
      mn = get2DIndexFrom1DIndex(matrix, left);
      m = mn[0];
      n = mn[1];
      if (matrix[m][n] === target) {
        return true;
      }
      return false;
    }
    i = Math.round((left + right) / 2);
    mn = get2DIndexFrom1DIndex(matrix, i);
    m = mn[0];
    n = mn[1];
  }

  return true;
};

const get2DIndexFrom1DIndex = (matrix, i) => {
  let m = Math.floor((i + 1) / matrix[0].length);
  let n = ((i + 1) % matrix[0].length) - 1;
  if (n === -1) {
    m--;
    n = matrix[0].length - 1;
  }

  return [m, n];
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
console.log(searchMatrix([[1, 3]], 1));
