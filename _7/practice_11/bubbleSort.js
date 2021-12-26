let myArray = [58, 55, 96, 90, 65, 72, 21, 81, 9, 86];



function bubbleSort(arr) {
 let temp;
 for(let i = arr.length-1; i>0; i--) {
  for(let j = 0; j<i; j++) {
   if(arr[j] > arr[j+1]) {
    temp = arr[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
   }
  }
 }
 return arr;
}

let sortedArray = bubbleSort(myArray);
console.log(sortedArray);