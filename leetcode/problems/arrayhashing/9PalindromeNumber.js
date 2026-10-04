/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }
  const stringX = x.toString();
  let reverseStringX = "";
  for (let i = stringX.length - 1; i >= 0; i--) {
    reverseStringX = reverseStringX + stringX[i];
  }
  return stringX === reverseStringX;
};

console.log(isPalindrome(10));
