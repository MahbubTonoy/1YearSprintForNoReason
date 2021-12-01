class Quad {
 constructor(height, width) {
  this.height = height;
  this.width = width;
 }
 area() {
  return this.height*this.width;
 }
 get getHeight() {
  return this.height;
 }
 get getWidth() {
  return this.width;
 }
 set setWidth(width) {
  this.width = width;
 }
 set setHeight(height) {
  this.height = height;
 }
}

let quadrilateral = new Quad(95, 87);
quadrilateral.setHeight = 100;
quadrilateral.setWidth = 33;
console.log(quadrilateral.getHeight);
console.log(quadrilateral.getWidth);