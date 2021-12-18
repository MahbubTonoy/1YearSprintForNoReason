let arr = [1,2,3,4,5,6];

function accumulator(arr, callback, startingVal) {
 let i=0, acc;
 if(startingVal === undefined) {
  acc = arr[i++];
 }
 else {
  acc = startingVal;
 }
 for( ; i<arr.length; i++ ) {
  acc = callback(acc, arr[i], i, arr);
 }
 return acc;
}

let sum = accumulator(arr, (acc, cur)=>{
 return acc+cur;
}, 10);

console.log(sum);