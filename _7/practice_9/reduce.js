let numbers = [1, 2, 3, 4, 5, 6];

// let sum = numbers.reduce((accumulator, number) => {
//  return accumulator + number;
// });


//making custom reduce method
function customReduce(arr, callback) {
 let accumulator = 0;
 for (let i of arr) {
  accumulator = callback(accumulator, i);
 }
 return accumulator;
}

let sum = customReduce(numbers, (acc, current) => acc + current);

console.log(sum);