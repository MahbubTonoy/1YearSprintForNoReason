let p = new Promise((resolved, reject)=> {
 let x = false;
 if(x) {
  resolved("Successfully done");
 }
 else {
  reject("Successfully Failed");
 }
});

p.then(data => console.log(data))
.catch(data=> console.log(data));