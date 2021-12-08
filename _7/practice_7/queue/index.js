let Queue = require("./queue");
let queue = new Queue(10);

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);
queue.push(60);
queue.push(70);
queue.push(80);
queue.push(90);
queue.push(100);

console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
queue.push(80);
queue.push(90);
queue.push(100);
console.log(queue.queue);