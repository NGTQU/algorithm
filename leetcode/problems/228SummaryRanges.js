const summaryRanges = (nums) => {
  let string = "";
  let result = [];
  nums.forEach((value, index, array) => {
    if (string === "") {
      string = `${value}`;
    }
    if (value !== array[index + 1] - 1) {
      string = string.concat(`->${value}`);
      result.push(string);
      string = "";
    }
  });
  return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
