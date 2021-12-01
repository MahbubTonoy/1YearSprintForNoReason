class Circumference {
 constructor(height, width) {
  this.height = height;
  this.width = width;
  this.circumference = (height+width)*2;
 }
 get getHeight() {
  return this.height;
 }
 get getWidth() {
  return this.width;
 }
 get result() {
  return this.circumference;
 }

 set setHeight(height) {
  this.height = height;
  this.width = (this.circumference/2)-height;
 }

 set setWidth(width) {
  this.width = width;
  this.height = (this.circumference/2)-width;
 }
}

let circumference = new Circumference(10, 8);
circumference.setHeight = 13;
// console.log(circumference.getWidth);
console.log(circumference);