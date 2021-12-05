let array = [72, 76, 92, 54, 50, 28, 57, 48, 0, 82];
let firstLarge, secondLarge;
if(array[0] > array[1]) {
 firstLarge = array[0];
 secondLarge = array[1];
} else {
 firstLarge = array[1];
 secondLarge = array[0];
}

for(let i = 2; i< array.length; i++) {
 if(array[i]>firstLarge) {
  secondLarge = firstLarge;
  firstLarge = array[i];
 }
 else if(array[i] > secondLarge) {
  secondLarge = array[i];
 }
}
console.log(firstLarge);
console.log(secondLarge);