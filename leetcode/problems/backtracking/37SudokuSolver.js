/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = (board) => {
  calculator(board);
};

const calculator = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        continue;
      }

      for (let number = 1; number <= 9; number++) {
        if (!isValid(number, i, j, board)) {
          continue;
        }

        board[i][j] = String(number);

        if (calculator(board)) {
          return true;
        }

        board[i][j] = ".";
      }

      return false;
    }
  }

  return true;
};

const isValid = (number, i, j, board) => {
  for (let k = 0; k < 9; k++) {
    if (board[i][k] === String(number)) {
      return false;
    }
  }

  for (let k = 0; k < 9; k++) {
    if (board[k][j] === String(number)) {
      return false;
    }
  }

  const subBoxRowIndex = Math.floor(i / 3) * 3;
  const subBoxColIndex = Math.floor(j / 3) * 3;

  for (let m = subBoxRowIndex; m < subBoxRowIndex + 3; m++) {
    for (let n = subBoxColIndex; n < subBoxColIndex + 3; n++) {
      if (board[m][n] === String(number)) {
        return false;
      }
    }
  }

  return true;
};
