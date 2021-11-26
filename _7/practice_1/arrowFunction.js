// // old ass function
// let squareOld = function(number) {
//  return number*number;
// }

// console.log(squareOld(8));

// // new arrow funciton
// let squareNew = number => number*number;
// console.log(squareNew(9));


let temp = {
 func() {
  setTimeout(()=>{
   console.log(this);
  }, 1000);
 },
 name: "tonoy"
}
temp.func();
// console.log(window);