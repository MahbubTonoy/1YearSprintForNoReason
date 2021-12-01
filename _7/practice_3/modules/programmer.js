import { Person } from "./person.js";

export default class Programmer extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }
  code() {
    console.log(`${this.name} is Coding as ${this.position}`);
  }
}
