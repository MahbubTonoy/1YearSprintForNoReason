class Stack {
  constructor(max=100) {
    this.max = max;
    this.stack = [];
    this.top = -1;
  }
  push(value) {
    if (this.top >= this.max-1) {
      throw new Error("Stack Overflow!");
    }
    this.stack[++this.top] = value;
  }
  pop() {
    if (this.isEmpty) {
      throw new Error("Invalid Action, Nothing To POP");
    }
    let item = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    return item;
  }
  print() {
    console.log(this.stack);
  }
  get get() {
    return this.stack;
  }
  get peak() {
    if (this.isEmpty) {
      return false;
    }
    return this.stack[this.top];
  }
  get isEmpty() {
    return this.top < 0;
  }
}

module.exports = Stack;
