class TimeMap {
  constructor() {
    this.object = {};
  }
  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (this.object[key]) {
      this.object[key].push({
        value: value,
        timestamp: timestamp,
      });
    } else {
      this.object[key] = [
        {
          value: value,
          timestamp: timestamp,
        },
      ];
    }
  }
  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  get(key, timestamp) {
    let value;
    if (this.object[key]) {
      let left = 0;
      let right = this.object[key].length - 1;
      let index = Math.ceil((left + right) / 2);

      while (true) {
        if (this.object[key][index].timestamp <= timestamp) {
          value = this.object[key][index].value;
          left = index;
        } else {
          right = index;
        }
        if (index === Math.ceil((left + right) / 2)) {
          if (this.object[key][left].timestamp <= timestamp) {
            value = this.object[key][left].value;
          }
          break;
        }
        index = Math.ceil((left + right) / 2);
      }
    }
    return value ?? "";
  }
}

const timeMap1 = new TimeMap();
timeMap1.set("foo", "bar", 1);
console.log(timeMap1.get("foo", 1));
console.log(timeMap1.get("foo", 3));
timeMap1.set("foo", "bar2", 4);
console.log(timeMap1.get("foo", 4));
console.log(timeMap1.get("foo", 5));

const timeMap2 = new TimeMap();
timeMap2.set("love", "high", 10);
timeMap2.set("love", "low", 20);
console.log(timeMap2.get("love", 5));
console.log(timeMap2.get("love", 10));
console.log(timeMap2.get("love", 15));
console.log(timeMap2.get("love", 20));
console.log(timeMap2.get("love", 25));
