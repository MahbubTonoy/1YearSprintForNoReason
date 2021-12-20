let hugeArray =[];
for(let i=0; i<5000000; i++) {
 hugeArray.push(i);
}

console.time('test');
let getOddAsEvenByReduce = hugeArray.filter(value => value%2===1).map(value=>value*2);
console.timeEnd('test');

console.time('test2');
let getOddAsEven = hugeArray.reduce((acc, cur)=>{
 if(cur%1 === 1) {
  acc.push(cur);
 }
 return acc;
}, []);
console.timeEnd('test2');