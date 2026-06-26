/**
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = (arr) => {
  if (arr.length < 3) {
    return false;
  }

  let leftTop;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      leftTop = i;
      break;
    }

    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  let rightTop;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > arr[i - 1]) {
      rightTop = i;
      break;
    }

    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return leftTop === rightTop;
};

console.log(validMountainArray([0, 3, 2, 1]));
