const {argv} = require('yargs');
const path = require('path');
const Todo = require('./Todo');
const {saveFile, readFile} = require('./utils');
const {ADD, UPDATE, NEXT,DONE, FIND, LIST} = require("./commands");

const fileName = '../data.json';
const filePath = path.resolve(__dirname, fileName);

(function init() {
 const data = readFile(filePath) || [];
 const todo = new Todo(data);
 const { _: baseCommand } = argv;

 switch(baseCommand[0]) {
  case ADD: {
   todo.addItem(argv.text);
   console.log("Task Added");
   saveFile(todo.todoList, filePath);
   break;
  }
  case UPDATE: {
   todo.update(argv.id, argv.text);
   console.log('Todo Updated');
   saveFile(todo.todoList, filePath);
   break;
  }
  case NEXT: {
   const item = todo.next();
   console.log(`ID: ${item.id}\nTask: ${item.task}\nDate Created: ${item.date}`);
   break;
  }
  case DONE: {
   todo.done();
   console.log("1 Item Completed");
   saveFile(todo.todoList, filePath);
   break;
  }
  case FIND: {
   const items = todo.find(argv.term);
   if(items.length === 0) {
    console.log('No Item Found');
    break;
   }
   for(let i of items) {
    console.log(`ID: ${i.id}\nTask: ${i.task}\nDate Created: ${i.date}`);
   }
   break;
  }
  case LIST: {
   // const items = todo.find(argv.text);
   if(todo.todoList.length === 0) {
    console.log('Empty List');
    break;
   }
   for(let i of todo.todoList) {
    console.log(`ID:\t${i.id}\nTask:\t${i.task}\nDate:\t${i.date}\n\n`);
   }
   break;
  }
  default:
   throw new Error('Command Not found');
 }
})();