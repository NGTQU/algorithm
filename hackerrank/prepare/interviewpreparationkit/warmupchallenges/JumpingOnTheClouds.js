function jumpingOnClouds(c) {
  // Write your code here
  let count = 0;
  let i = 0;
  while (i < c.length - 1) {
    if (c[i + 2] === 1) {
      i++;
    } else {
      i = i + 2;
    }
    count++;
  }
  return count;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
