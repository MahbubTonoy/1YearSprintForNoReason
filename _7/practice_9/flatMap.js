let arr = [1,2,3,4,5,6];

let flatMapUsingReduce = arr.map(item => [item, item*2])
.reduce((acc, cur)=>{
  return acc.concat(cur);
 },[]);

 let flatMap = arr.flatMap(item => [item, item*2]);

 console.log(flatMapUsingReduce);