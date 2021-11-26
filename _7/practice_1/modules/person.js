export class Person {
 constructor(n) {
  this.name = n;
 }
 walk() {
  console.log(this.name+" is walking");
 }
 watch() {
  console.log(this.name+" is watching");
 }
}