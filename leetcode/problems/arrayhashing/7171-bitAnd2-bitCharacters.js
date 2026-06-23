/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = (bits) => {
  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === 0) {
      if (i === bits.length - 1) {
        return true;
      }
      continue;
    }
    if (bits[i] === 1) {
      i++;
    }
  }
  return false;
};
