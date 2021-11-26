import { Person } from "./person.js";

export class Programmer extends Person {
 constructor(name, position) {
  super(name);
  this.position = position;
 }
 code() {
  console.log(this.name+ " is working as " + this.position+"  level programmer");
 }
}