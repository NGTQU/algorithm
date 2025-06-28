/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  return isValidRows(board) && isValidColumns(board) && isValidSubBoxes(board);
};

const isValidRows = (board) => {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    const occurrence = {};
    for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
      if (board[rowIndex][columnIndex] === ".") continue;
      if (occurrence[board[rowIndex][columnIndex]]) return false;
      occurrence[board[rowIndex][columnIndex]] = true;
    }
  }
  return true;
};

const isValidColumns = (board) => {
  for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
    const occurrence = {};
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      if (board[rowIndex][columnIndex] === ".") continue;
      if (occurrence[board[rowIndex][columnIndex]]) return false;
      occurrence[board[rowIndex][columnIndex]] = true;
    }
  }
  return true;
};

const isValidSubBoxes = (board) => {
  for (let subRowIndex = 0; subRowIndex < 3; subRowIndex++) {
    for (let subColumnIndex = 0; subColumnIndex < 3; subColumnIndex++) {
      const occurrence = {};
      for (
        let rowIndex = 3 * subRowIndex;
        rowIndex < 3 * subRowIndex + 3;
        rowIndex++
      ) {
        for (
          let columnIndex = 3 * subColumnIndex;
          columnIndex < 3 * subColumnIndex + 3;
          columnIndex++
        ) {
          if (board[rowIndex][columnIndex] === ".") continue;
          if (occurrence[board[rowIndex][columnIndex]]) {
            return false;
          }
          occurrence[board[rowIndex][columnIndex]] = true;
        }
      }
    }
  }
  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
