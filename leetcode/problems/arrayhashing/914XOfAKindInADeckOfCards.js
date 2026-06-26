/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = (deck) => {
  // to find a common divior aka x of all groups of numbers in deck
  const occurence = {};
  for (let i = 0; i < deck.length; i++) {
    if (occurence[deck[i]] === undefined) {
      occurence[deck[i]] = 1;
    } else {
      occurence[deck[i]] = occurence[deck[i]] + 1;
    }
  }

  const occurences = [];
  for (let property in occurence) {
    occurences.push(occurence[property]);
  }

  const minOccurence = Math.min(...occurences);
  for (let x = 2; x <= minOccurence; x++) {
    if (deck.length % x === 0 && occurences.every((group) => group % x === 0))
      // found groups size x
      return true;
  }

  return false;
};

console.log(hasGroupsSizeX([0, 0, 1, 1, 1, 1, 2, 2, 3, 4]));
console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2]));
console.log(hasGroupsSizeX([1]));
console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
