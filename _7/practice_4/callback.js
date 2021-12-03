// let tonoyOnPC = true;
// let tonoyLearning = true;

// // function situation(progress, error) {
// //  if(tonoyOnPC) {
// //   if(tonoyLearning) {
// //    progress("Congratulations");
// //   } else {
// //    error("No Pain, No Gain!");
// //   }
// //  } else {
// //   error("Not on PC No More Progress!");
// //  }
// // }

// // situation(p=>console.log(p), e=>console.log(e));

// function situationOnPromise() {
//  return new Promise((resolve, reject)=> {
//   if(tonoyOnPC) {
//    if(tonoyLearning) {
//     resolve("Congratulations!");
//    } else {
//     reject("No Pain, No Gain!");
//    }
//   } else {
//    reject("Not on PC, No More Progress!");
//   }
//  });
// }

// situationOnPromise().then(data=>console.log(data))
// .catch(data=>console.log(data));

let console1 = new Promise((resolve, reject)=> {
 resolve("Hello World 1");
});

let console2 = new Promise((resolve, reject)=> {
 resolve("Hello World 2");
});

let console3 = new Promise((resolve, reject)=> {
 resolve("Hello World 3");
});

Promise.all([
 console1,
 console2,
 console3
]).then(data => console.log(data));