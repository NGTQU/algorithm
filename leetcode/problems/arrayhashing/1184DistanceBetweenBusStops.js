/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
const distanceBetweenBusStops = (distance, start, destination) => {
  if (start === destination) {
    return 0;
  }

  let startToDestination = 0;
  let destinationToStart = 0;

  for (let i = 0; i < distance.length; i++) {
    if (start < destination) {
      if (i >= start && i < destination) {
        startToDestination += distance[i];
        continue;
      }

      if (i < start || i >= destination) {
        destinationToStart += distance[i];
      }

      continue;
    }

    if (i >= start || i < destination) {
      startToDestination += distance[i];
      continue;
    }

    if (i < start && i >= destination) {
      destinationToStart += distance[i];
    }
  }

  return Math.min(startToDestination, destinationToStart);
};

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
console.log(distanceBetweenBusStops([7, 10, 1, 12, 11, 14, 5, 0], 7, 2));
