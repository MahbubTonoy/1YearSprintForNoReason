class Queue {
  constructor(MAX) {
    this.max = MAX;
    this.queue = new Array(this.max);
    this.rear = 0;
  }
  enqueue(value) {
   if(this.isMax) {
    console.log("ERROR: Queue Overflow");
    return false;
   }
    this.queue[this.rear++] = value;
  }
  get isMax() {
   return this.max <= this.rear;
  }
  get isEmpty() {
   return this.rear < 0;
  }
  dequeue() {
   if(this.rear <= 0) {
    console.log("ERROR: Queue have no Data");
    return false;
   }
   let item = this.queue[0];
   for(let i=0; i<this.rear-1; i++) {
    this.queue[i] = this.queue[i+1];
   }
   delete this.queue[--this.rear];
   return item;
  }
}

module.exports = Queue;
