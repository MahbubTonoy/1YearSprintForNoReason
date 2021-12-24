// import Contact from './contact.js';

let Contact = require("./contact.js");

let generateNumber = ()=>{
 return `+${Math.floor(Math.random()*100000000000)}`;
}

let phonebook = [
 {
  name: "Mahbub Rashid Tonoy",
  phone: generateNumber(),
  email: "tonoy@gmail.com"
 },
 {
  name: "Ohid Uz Zaman Tarun",
  phone: generateNumber(),
  email: "tarun@gmail.com"
 },
 {
  name: "Mehedi Hasan Niloy",
  phone: generateNumber(),
  email: "niloy@gmail.com"
 },
 {
  name: "Jahidur Rahman Rifat",
  phone: generateNumber(),
  email: "rifat@gmail.com"
 },
 {
  name: "Habibur Rahman Emon",
  phone: generateNumber(),
  email: "emon@gmail.com"
 },
 {
  name: "Md Asif",
  phone: generateNumber(),
  email: "asif@gmail.com"
 },
 {
  name: "Md Gazi",
  phone: generateNumber(),
  email: "gazi@gmail.com"
 },
 {
  name: "Ahsanul Kabir Pavel",
  phone: generateNumber(),
  email: "pavel@gmail.com"
 },
];

let arrangedContact = new Contact(phonebook).sortedList();

// console.log(arrangedContact);

let table = (group) => {
 let keys = Object.keys(group);
 keys.forEach((v)=>{
  console.log(`Key: ${v}`);
  console.table(group[v]);
  console.log("\n");
 })
}
table(arrangedContact);

