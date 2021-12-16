// let numbers = [1, 2, 3, 4, 5, 6];

// // let sum = numbers.reduce((accumulator, number) => {
// //  return accumulator + number;
// // });


// //making custom reduce method
// function customReduce(arr, callback, initialValue) {
//  let accumulator, i;
//  if(initialValue === undefined) {
//   accumulator = arr[0];
//   i=1;
//  }
//  else {
//   accumulator = initialValue;
//   i=0;
//  }
//  for ( ; i<arr.length; i++) {
//   accumulator = callback(accumulator, arr[i], i, arr);
//  }
//  return accumulator;
// }

// // let sum = customReduce(numbers, (acc, current, index, arr) => {
// //  acc += current;
// //  if(index === arr.length-1) {
// //   return acc/arr.length;
// //  }
// //  return acc;
// // });

// customReduce(numbers, (acc, cur, index)=>{
//  console.log(`Index: ${index}\tAccumulator: ${acc}\t\tCurrentValue: ${cur}`);
//  return acc+cur;
// }, 10);

// // console.log(sum);

let numbers = [1, 2, 3, 4, 5, 6];

let sum = numbers.reduce((acc, cur) => {
 return acc + cur;
});
let avg = numbers.reduce((acc, cur, index, arr) => {
 acc += cur;
 if (index === arr.length - 1) {
  return acc / arr.length;
 }
 return acc;
});

console.log(sum, avg);