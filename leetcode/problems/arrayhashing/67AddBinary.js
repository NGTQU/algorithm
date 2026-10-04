/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  let refactorA = a;
  let refactorB = b;
  while (refactorA.length < refactorB.length) {
    refactorA = "0" + refactorA;
  }
  while (refactorB.length < refactorA.length) {
    refactorB = "0" + refactorB;
  }

  let result = "";
  let remainder = false;
  for (let i = refactorA.length - 1; i >= 0; i--) {
    if (refactorA[i] === "0" && refactorB[i] === "0") {
      if (remainder) {
        result = "1" + result;
        remainder = false;
      } else {
        result = "0" + result;
      }
      continue;
    }
    if (refactorA[i] === "1" && refactorB[i] === "1") {
      if (remainder) {
        result = "1" + result;
      } else {
        result = "0" + result;
        remainder = true;
      }
      continue;
    }
    if (remainder) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }
  }
  if (remainder) {
    result = "1" + result;
  }
  return result;
};

console.log(addBinary("11", "1"));
