/**
 * 1. piles = [total bananas, ..., total bananas]
 * 2. piles.length = n
 * <~> i = 0 ... (n - 1)
 * 3. speed = part bananas/an hour
 * <~> hours[0 ... (n - 1)] = (piles[0 ... (n - 1)] / speed) + 1
 * 4. hours[0] + ... + hours[n - 1] <= expectedHours
 * <~> resultSpeed = ?
 *
 * 1. (above 1 and 2) ~> expectedHours = n* ... (piles[0] + ... + piles[n - 1])**
 * <~> speed = 1 ... (maxPile <~> maxBananas)
 * ~~> minExpectedHours <~> maxSpeed
 * ~~> maxExpectedHours <~> minSpeed
 * ~~~> (expectedHours - n)*** = moreHours <~> lessSpeed
 * ~~~> expectedHours <~> speed = ? <~~> speed <= minExpectedHours x maxSpeed / expectedHours (I)
 * 2. (above 3 and 4) ~> ((piles[0] + ... + piles[n - 1]) / speed) + n <= expectedHours
 * <~> speed <= (piles[0] + ... + piles[n - 1]) / (expectedHours - n)
 * <~> speed <= ** / ***
 * <~~> speed <= maxExpectedHours / moreHours
 * <~> speed <= ** / (expectedHours - *)
 * <~~> speed <= maxExpectedHours / (expectedHours - minExpectedHours) (II)
 *
 * (I)(II) ~> minSpeed = while(hour === expectedHours) speed--
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, expectedHours) => {
  let left = 1;
  let right = 0;

  for (let i = 0; i < piles.length; i++) {
    if (right < piles[i]) {
      right = piles[i];
    }
  }

  let result = 0;
  let speed = Math.ceil((left + right) / 2);

  while (left !== right) {
    let actualHours = getActualHours(piles, speed);
    if (actualHours <= expectedHours) {
      result = speed;
      right = speed;
    } else {
      left = speed;
    }
    if (speed === Math.ceil((left + right) / 2)) {
      // left + 1 === right and result === right due to Math.round so we need to check left and break the loop
      actualHours = getActualHours(piles, left);
      if (actualHours <= expectedHours) {
        result = left;
      }
      break;
    }
    speed = Math.ceil((left + right) / 2);
  }

  return result;
};

const getActualHours = (piles, speed) => {
  let actualHours = 0;
  for (let i = 0; i < piles.length; i++) {
    actualHours = actualHours + Math.ceil(piles[i] / speed);
  }
  return actualHours;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([312884470], 968709470));
console.log(minEatingSpeed([1000000000, 1000000000], 3));
