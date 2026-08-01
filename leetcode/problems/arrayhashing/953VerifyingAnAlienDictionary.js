/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
const isAlienSorted = (words, order) => {
  const orders = toOrders(order);

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const previousWord = words[i - 1];

    const currentLength = currentWord.length;
    const previousLength = previousWord.length;

    const currentLastCharacterIndex = currentLength - 1;
    const previousLastCharacterIndex = previousLength - 1;

    for (
      let characterIndex = 0;
      characterIndex < currentLength;
      characterIndex++
    ) {
      const currentCharacter = currentWord[characterIndex];
      const previousCharacter = previousWord[characterIndex];

      const currentCharacterOrder = orders[currentCharacter];
      const previousCharacterOrder = orders[previousCharacter];

      if (currentCharacterOrder < previousCharacterOrder) {
        return false;
      }

      if (currentCharacterOrder === previousCharacterOrder) {
        if (
          currentLastCharacterIndex < previousLastCharacterIndex &&
          characterIndex === currentLastCharacterIndex
        ) {
          return false;
        }

        continue;
      }

      break;
    }
  }

  return true;
};

const toOrders = (alphabet) => {
  const orders = {};

  for (let i = 0; i < alphabet.length; i++) {
    orders[alphabet[i]] = i;
  }

  return orders;
};

console.log(isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
console.log(isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"));
console.log(isAlienSorted(["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"));
