const countingValleys = (steps, path) => {
  // Write your code here
  let seaLevel = 0;
  let count = 0;
  let hasSeaLevelChanged = false;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      if (seaLevel === 0) {
        hasSeaLevelChanged = true;
      }
      seaLevel++;
    } else {
      if (seaLevel === 0) {
        hasSeaLevelChanged = true;
      }
      seaLevel--;
    }
    if (seaLevel < 0 && hasSeaLevelChanged) {
      hasSeaLevelChanged = false;
      count++;
    }
  }
  return count;
};

console.log(countingValleys(8, "DDUUUUDD"));
