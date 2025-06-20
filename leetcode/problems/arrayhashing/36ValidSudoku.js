/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board.length; column++) {
      const currentCell = board[row][column];
      if (currentCell === ".") {
        continue;
      }
      let nextRow = row + 1;
      let nextColumn = column + 1;
      while (nextRow < board.length || nextColumn < board.length) {
        if (
          currentCell === board[(row, nextColumn)] ||
          currentCell === board[(nextRow, column)]
        ) {
          return false;
        }
        nextRow++;
        nextColumn++;
      }
    }
  }

  for (let subBoxRow = 0; subBoxRow < 3; subBoxRow++) {
    for (let subBoxColumn = 0; subBoxColumn < 3; subBoxColumn++) {
      const top = board[0 + 3 * subBoxRow].slice(
        0 + 3 * subBoxColumn,
        3 + 3 * subBoxColumn
      );
      const middle = board[1 + 3 * subBoxRow].slice(
        0 + 3 * subBoxColumn,
        3 + 3 * subBoxColumn
      );
      const bottom = board[2 + 3 * subBoxRow].slice(
        0 + 3 * subBoxColumn,
        3 + 3 * subBoxColumn
      );
      const subBox = top.concat(middle).concat(bottom);
      if (containsDuplicate(subBox)) {
        return false;
      }
    }
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const occurrence = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === ".") continue;
    if (occurrence[nums[i]]) return true;
    occurrence[nums[i]] = true;
  }
  return false;
};

const testData = [
  [
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],
    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ],
];
isValidSudoku(testData);
