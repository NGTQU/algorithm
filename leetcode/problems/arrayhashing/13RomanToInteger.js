/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let int = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V" || s[i + 1] === "X") {
          int -= 1;
        } else {
          int += 1;
        }
        break;
      case "V":
        int += 5;
        break;
      case "X":
        if (s[i + 1] === "L" || s[i + 1] === "C") {
          int -= 10;
        } else {
          int += 10;
        }
        break;
      case "L":
        int += 50;
        break;
      case "C":
        if (s[i + 1] === "D" || s[i + 1] === "M") {
          int -= 100;
        } else {
          int += 100;
        }
        break;
      case "D":
        int += 500;
        break;
      case "M":
        int += 1000;
        break;
    }
  }
  return int;
};
