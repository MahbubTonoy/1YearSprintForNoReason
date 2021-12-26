let myArray = [9, 21, 55, 58, 65, 72, 81, 86, 90, 96];

let binarySearch = (arr, val) => {
 let bottom = 0, top = arr.length-1, center;
 while (bottom <= top) {
  center = Math.floor((top + bottom) / 2);
  if (arr[center] === val) {
   return center;
  }
  else if(arr[center] > val) {
   top = center-1;
  }
  else {
   bottom = center+1;
  }
 }
 return -1;
}
let sortedArray = binarySearch(myArray, 66);
console.log(sortedArray);