/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, positions, speeds) => {
  const tempPositions = {};
  for (let i = 0; i < positions.length; i++) {
    tempPositions[positions[i]] = i;
  }

  const sortedHours = [];
  for (property in tempPositions) {
    sortedHours.push(
      hour(target, Number(property), speeds[tempPositions[property]])
    );
  }

  let carFleet = 0;
  for (let i = sortedHours.length - 1; i >= 0; i--) {
    if (sortedHours[i] <= sortedHours[i + 1]) {
      sortedHours[i] = sortedHours[i + 1];
    } else {
      carFleet++;
    }
  }

  return carFleet;
};

const hour = (target, position, speed) => {
  return (target - position) / speed;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 1
console.log(carFleet(10, [6, 8], [3, 2])); // 2
console.log(carFleet(10, [0, 4, 2], [2, 1, 3])); // 1
console.log(carFleet(20, [6, 2, 17], [3, 9, 2])); // 2
console.log(carFleet(12, [4, 0, 5, 3, 1, 2], [6, 10, 9, 6, 7, 2])); // 4
