let number = [1,2,3,4,5,6];

//map
let square = number.reduce((acc, cur)=> acc.concat(cur*cur), []);
console.log("Map: "+square);

//filter
let filter = number.reduce((acc, cur)=>{
 if(cur !== 5) {
  return acc.concat(cur);
 }
 return acc;
}, []);
console.log("Filter: "+filter);