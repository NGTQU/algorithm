/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const openCharacters = ["(", "{", "["];
  const pairCharacters = ["()", "{}", "[]"];
  let stack = [];
  let latestIndex = 0;

  for (let i = 0; i < s.length; i++) {
    if (openCharacters.includes(s[i])) {
      latestIndex = stack.push(s[i]) - 1;
    } else {
      const latestCharacter = stack.pop(s[latestIndex]);
      if (!pairCharacters?.includes(latestCharacter?.concat(s[i]))) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
