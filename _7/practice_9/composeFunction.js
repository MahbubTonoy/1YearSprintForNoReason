let add2 = (n) => n+2;
let multiply10 = (n) => n*10;
let divide5 = (n)=>n/5;

let all = (...fns) => x => fns.reduce((v, f)=> f(v), x);



// console.log(all(10, add2, multiply10, divide5));
console.log(all(add2, multiply10, divide5)(10));
