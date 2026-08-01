/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = (arr) => {
  const occurrences = {};

  for (let i = 0; i < arr.length; i++) {
    if (occurrences[arr[i]] === undefined) {
      occurrences[arr[i]] = 1;
    } else {
      occurrences[arr[i]] = occurrences[arr[i]] + 1;
    }
  }

  const uniqueOccurrences = {};

  for (let property in occurrences) {
    if (uniqueOccurrences[occurrences[property]] === undefined) {
      uniqueOccurrences[occurrences[property]] = property;
    } else {
      return false;
    }
  }

  return true;
};
