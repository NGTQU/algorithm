/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const indexSum = {};
  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j]) {
        if (indexSum[i + j] === undefined) {
          indexSum[i + j] = [list1[i]];
          continue;
        }
        indexSum[i + j].push(list1[i]);
      }
    }
  }

  for (let property in indexSum) {
    return indexSum[property];
  }
};
