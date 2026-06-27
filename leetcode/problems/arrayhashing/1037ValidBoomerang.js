/**
 * @param {number[][]} points
 * @return {boolean}
 */
const isBoomerang = (points) => {
  return (
    (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !=
    (points[0][0] - points[2][0]) * (points[0][1] - points[1][1])
  );
};

console.log(
  isBoomerang([
    [0, 1],
    [0, 1],
    [2, 1],
  ]),
);
console.log(
  isBoomerang([
    [0, 0],
    [1, 1],
    [1, 1],
  ]),
);
