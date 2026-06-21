/**
 * @param {number[]} colors
 * @return {number}
 */
const numberOfAlternatingGroups = (colors) => {
  const groups = colors.concat(colors.slice(0, 2));
  const maxRight = groups.length - 1;
  let left = 0;
  let right = 2;
  let count = 0;

  while (right <= maxRight) {
    if (groups[left] === groups[right] && groups[left] !== groups[left + 1]) {
      count++;
    }
    left++;
    right++;
  }

  return count;
};

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]));
console.log(numberOfAlternatingGroups([0, 0, 1]));
