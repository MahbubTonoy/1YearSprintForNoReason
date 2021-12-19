let matrix = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];

let sum = matrix.reduce((acc, cur) => {
 return acc+cur.reduce((acc2, cur2) => {
  return acc2 + cur2;
 }, 0);
}, 0);

console.log(sum);