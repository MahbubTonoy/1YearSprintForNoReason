let employees = [
 {
  name: "Mahbub Rashid Tonoy",
  id: 12
 },
 {
  name: "Jahidur Rahman Rifat",
  id: 13
 },
 {
  name: "Mehedi",
  id: 14
 },
 {
  name: "MD Fardaws Gazi",
  id: 15
 },
 {
  name: "Ohiduzzaman Tarun",
  id: 16
 },
 {
  name: "MD Ahsanul Kabir",
  id: 17
 }
]


let targetID = 14;
let updatedName = "Mehedi Hasan Niloy";

for(let x of employees) {
 if(x.id === 14) {
  x.name = updatedName;
  break;
 }
}
console.log(employees);