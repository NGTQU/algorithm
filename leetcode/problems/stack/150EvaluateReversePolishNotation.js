/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (!Number.isNaN(Number(tokens[i]))) {
      stack.push(Number(tokens[i]));
      continue;
    }
    const firstOperand = stack.pop();
    const secondOperand = stack.pop();
    if (tokens[i] === "+") {
      stack.push(secondOperand + firstOperand);
      continue;
    }
    if (tokens[i] === "-") {
      stack.push(secondOperand - firstOperand);
      continue;
    }
    if (tokens[i] === "*") {
      stack.push(secondOperand * firstOperand);
      continue;
    }
    if (tokens[i] === "/") {
      stack.push(parseInt(secondOperand / firstOperand));
    }
  }
  return Number(stack[0]);
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
