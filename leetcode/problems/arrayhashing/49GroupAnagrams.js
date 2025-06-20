const mergeSortString = (str) => {
  if (str.length <= 1) {
    return str;
  }

  const mid = Math.floor(str.length / 2);
  const left = str.slice(0, mid);
  const right = str.slice(mid);

  return merge(mergeSortString(left), mergeSortString(right));
};

const merge = (left, right) => {
  let result = "";
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result += left[leftIndex];
      leftIndex++;
    } else {
      result += right[rightIndex];
      rightIndex++;
    }
  }

  return result + left.slice(leftIndex) + right.slice(rightIndex);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const occurrenceObject = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedString = mergeSortString(strs[i]);
    if (occurrenceObject[sortedString] !== undefined) {
      occurrenceObject[sortedString].push(i);
    } else {
      occurrenceObject[sortedString] = [i];
    }
  }
  const results = [];
  let occurrenceArray;
  for (const property in occurrenceObject) {
    occurrenceArray = [];
    for (let i = 0; i < occurrenceObject[property].length; i++) {
      occurrenceArray.push(strs[occurrenceObject[property][i]]);
    }
    results.push(occurrenceArray);
  }
  return results;
};

console.log(groupAnagrams(["abc", "bac", "jjj"]));
