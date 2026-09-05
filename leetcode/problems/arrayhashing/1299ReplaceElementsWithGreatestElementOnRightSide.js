/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
  const replaceArr = [];
  const lastIndex = arr.length - 1;
  let max = -1;

  for (let i = lastIndex; i >= 0; i--) {
    if (max < arr[i + 1]) {
      max = arr[i + 1];
    }
    replaceArr.push(max);
  }

  const orderReplaceArr = [];
  for (let i = lastIndex; i >= 0; i--) {
    orderReplaceArr.push(replaceArr[i]);
  }

  return orderReplaceArr;
};
