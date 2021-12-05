// // // // let array2 = [1,2,3,4,5,6,7];
// // // // // let deleteLength= 3;
// // // // // array2.length -= deleteLength;

// // // // array2.splice(2,3);

// // // // console.log(array2);

// // // let array3 = [1,2,3,4,5,6,7];
// // // let target = 5;

// // // for(let i in array3) {
// // //  if(array3[i] === target) {
// // //   array3.splice(i, 1);
// // //   break;
// // //  }
// // // }
// // // console.log(array3);

// // let array5 = [1,2,3,4,5,6,7];

// // array5 = array5.filter((item)=>{
// //  if(item !== 5) {
// //   return item;
// //  }
// // })
// // console.log(array5);

// let x = [1,2,3];
// let y = x;
// x.length = 0;
// console.log(x,y);

let x = [1,2,3,4];
while(x.length) x.pop();
console.log(x);