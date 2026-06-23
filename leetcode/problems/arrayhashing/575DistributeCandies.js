/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = (candyType) => {
  candyType.sort((a, b) => a - b);

  const candies = candyType.length / 2;
  let types = 0;

  for (let i = 0; i < candyType.length; i++) {
    if (candyType[i] === candyType[i + 1]) {
      continue;
    }
    types++;
  }

  return Math.min(candies, types);
};
