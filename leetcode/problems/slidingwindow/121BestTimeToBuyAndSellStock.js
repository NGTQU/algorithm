/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let currentSmall = prices[0];
  let currentLarge = undefined;
  let currentMaxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < currentSmall) {
      currentSmall = prices[i];
      if (currentLarge != undefined) {
        currentLarge = undefined;
      }
    } else if (prices[i] > currentLarge || currentLarge == undefined) {
      currentLarge = prices[i];
      if (currentMaxProfit < currentLarge - currentSmall) {
        currentMaxProfit = currentLarge - currentSmall;
      }
    }
  }

  return currentMaxProfit;
};

console.log(maxProfit([1, 2]));
console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 4, 2]));
console.log(maxProfit([2, 1, 2, 0, 1]));
