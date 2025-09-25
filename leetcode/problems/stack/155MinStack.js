class MinStack {
  constructor() {
    this.stack = [];
    this.index = this.stack.length - 1;
    this.minStack = [];
    this.minIndex = this.minStack.length - 1;
  }

  /**
   * @returns {boolean}
   */
  isStackEmpty() {
    return this.index === -1;
  }

  /**
   * @returns {boolean}
   */
  isMinStackEmpty() {
    return this.minIndex === -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (val === undefined) return;
    this.index++;
    this.stack[this.index] = val;

    if (this.isMinStackEmpty() || val <= this.minStack[this.minIndex][1]) {
      this.minIndex++;
      this.minStack[this.minIndex] = [this.index, val];
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.isStackEmpty()) return;
    if (this.minStack[this.minIndex][0] === this.index) {
      this.minStack[this.minIndex] = undefined;
      this.minIndex--;
    }

    this.stack[this.index] = undefined;
    this.index--;
  }

  /**
   * @return {number}
   */
  top() {
    return this.isStackEmpty() ? undefined : this.stack[this.index];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.isStackEmpty() ? undefined : this.minStack[this.minIndex][1];
  }
}

const obj = new MinStack();
obj.push();
obj.push(-2);
obj.push(0);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());

const obj2 = new MinStack();
obj2.push();
obj2.push(2147483646);
obj2.push(2147483646);
console.log(obj2.top());
obj2.pop();
console.log(obj2.getMin());
obj2.pop();
console.log(obj2.getMin());
obj2.pop();
obj2.push(2147483647);
console.log(obj2.top());
console.log(obj2.getMin());
obj2.push();
console.log(obj2.top());
console.log(obj2.getMin());
obj2.pop();
console.log(obj2.getMin());
