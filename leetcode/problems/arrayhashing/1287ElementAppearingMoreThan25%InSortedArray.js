/**
 * @param {number[]} arr
 * @return {number}
 */
const findSpecialInteger = (arr) => {
  const maxOccurrence = arr.length / 4;
  let currentCount = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      currentCount++;

      if (currentCount > maxOccurrence) {
        return arr[i];
      }

      continue;
    }

    currentCount = 1;
  }

  return arr[0];
};

console.log(findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3]));
console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
