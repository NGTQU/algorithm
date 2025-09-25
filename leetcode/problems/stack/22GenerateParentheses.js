/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const openParenthesis = "(";
  const closeParenthesis = ")";
  const stack = [
    {
      numberOfOpenParentheses: 0,
      numberOfCloseParentheses: 0,
      parentheses: "",
    },
  ];
  const generateParentheses = [];

  while (stack.length !== 0) {
    const currentParentheses = stack.pop();
    if (
      isValidParenthesesToGenerate(
        currentParentheses.numberOfOpenParentheses,
        currentParentheses.numberOfCloseParentheses,
        n
      )
    ) {
      generateParentheses.push(currentParentheses.parentheses);
    } else {
      if (
        isValidParenthesesToContinue(
          currentParentheses.numberOfOpenParentheses,
          currentParentheses.numberOfCloseParentheses,
          n
        )
      ) {
        stack.push({
          numberOfOpenParentheses:
            currentParentheses.numberOfOpenParentheses + 1,
          numberOfCloseParentheses: currentParentheses.numberOfCloseParentheses,
          parentheses: currentParentheses.parentheses.concat(openParenthesis),
        });
        stack.push({
          numberOfOpenParentheses: currentParentheses.numberOfOpenParentheses,
          numberOfCloseParentheses:
            currentParentheses.numberOfCloseParentheses + 1,
          parentheses: currentParentheses.parentheses.concat(closeParenthesis),
        });
      }
    }
  }
  return generateParentheses;
};

const isValidParenthesesToGenerate = (
  numberOfOpenParentheses,
  numberOfCloseParentheses,
  n
) => {
  if (
    numberOfOpenParentheses === numberOfCloseParentheses &&
    numberOfOpenParentheses === n
  ) {
    return true;
  }
  return false;
};

const isValidParenthesesToContinue = (
  numberOfOpenParentheses,
  numberOfCloseParentheses,
  n
) => {
  if (
    numberOfOpenParentheses > n ||
    numberOfCloseParentheses > numberOfOpenParentheses
  ) {
    return false;
  }
  return true;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
