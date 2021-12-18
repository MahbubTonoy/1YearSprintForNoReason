let stupidNumbers = [[1,2,3], 4,5,[6,7,8],[9,[10,11]]];

let numbers = stupidNumbers.reduce((acc, cur)=>{
 return acc.concat(cur);
}, []);
let flatNumbers = stupidNumbers.flat();
console.log(numbers);
console.log(flatNumbers.flat());