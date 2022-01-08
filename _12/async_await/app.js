let waiting = () => {
 let date = new Date().getTime();
 while(date+3000 >= new Date().getTime()) {

 }
 console.log("waiting function");
}

console.log("first run");
waiting();
console.log("last run");