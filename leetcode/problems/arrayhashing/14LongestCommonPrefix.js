/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(strs[0].slice(0, i + 1))) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
