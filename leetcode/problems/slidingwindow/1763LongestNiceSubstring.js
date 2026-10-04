/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let subString = s.slice(i, j + 1);

      if (isNice(subString) && subString.length > result.length) {
        result = subString;
      }
    }
  }

  return result;
};

const isNice = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (!s.includes(s[i].toLowerCase()) || !s.includes(s[i].toUpperCase())) {
      return false;
    }
  }
  return true;
};
