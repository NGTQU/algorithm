// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// const dailyTemperatures = (temperatures) => {
//   const stack = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     for (let j = i + 1; j < temperatures.length; j++) {
//       if (temperatures[i] < temperatures[j]) {
//         stack.push(j - i);
//         break;
//       }
//     }
//     if (stack[i] === undefined) {
//       stack.push(0);
//     }
//   }
//   return stack;
// };

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const stack = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[i] < temperatures[j]) {
        stack[i] = j - i;
        break;
      }
      if (stack[j] === 0) {
        stack[i] = 0;
        break;
      }
      if (temperatures[i] === temperatures[j]) {
        stack[i] = stack[j] + (j - i);
        break;
      }
    }
    if (stack[i] === undefined) {
      stack[i] = 0;
    }
  }
  return stack;
};

console.log(dailyTemperatures([34, 80, 80, 34, 34, 80, 80, 80, 80, 34]));
