// function arrayIteration(arr,callback) {
//  for(let i=0; i<arr.length; i++) {
//   if(callback === undefined) {
//    return false;
//   }
//   callback(i, arr[i]);
//  }
// }

// let arr = [1,2,3,4,5];
// arrayIteration(arr, (i, value)=>{
//  console.log(`Index: ${i}, Value ${value}`);
// })
let arr = [1,2,3,4,5];
arr.forEach((value, index)=>{
 console.log(value, index);
});