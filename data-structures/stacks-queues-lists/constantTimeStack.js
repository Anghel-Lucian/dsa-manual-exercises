class Stack {
  items = [];
  minItem = null;

  push(x) {
    if(x === null) return;

    if(this.minItem === null) {
      this.minItem = x;
    }

    if(this.minItem > x) {
      this.minItem = x;
    }

    this.items.push(x);
  }

  pop() {
    this.items.pop();
  }

  findmin() {
    return this.minItem;
  }
}

const stack = new Stack();

console.log(stack.findmin());
stack.push(1);
stack.push(3);
stack.push(7);
console.log(stack.findmin());
stack.push(100);
stack.push(-1);
console.log(stack.findmin());