function generateId(arr) {
 if(arr.length === 0) return 1;
 return arr[arr.length-1].id+1;
}

class Todo {
 constructor(todoList = []) {
  this.todoList = todoList;
 }
 addItem(task) {
  let item = {
   task,
   id: generateId(this.todoList),
   date: new Date()
  }
  this.todoList.push(item);
 }
 update(id, newTask) {
  for(let i of this.todoList) {
   if(i.id === id) {
    i.task = newTask;
    break;
   }
  }
 }
 done() {
  return this.todoList.shift();
 }
 next() {
  return this.todoList[0];
 }
 find(term) {
  let result = [];
  for(let i of this.todoList) {
   let item = i;
   if(item.task.toLowerCase().includes(term.toLowerCase())) {
    result.push(task);
   }
  }
  return result;
 }
}

module.exports = Todo;