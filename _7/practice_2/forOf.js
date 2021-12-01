let name = "Mahbub Rashid Tonoy";
let charArray = [];

for(let char of name) {
 char = `<span class='characters'>${char}</span>`;
 charArray.push(char);
}
console.log(charArray);
