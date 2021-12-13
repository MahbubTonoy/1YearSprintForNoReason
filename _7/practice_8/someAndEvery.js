let students = [
 { name: "Mahbub Rashid Tonoy", cgpa: 1.99 },
 { name: "Habibur Rahman Emon", cgpa: 4.99 },
 { name: "Jahidur Rahman Rifat", cgpa: 3.80 },
 { name: "Md Mehedi Hasan Niloy", cgpa: 3.60 },
 { name: "Faisal Ahmed", cgpa: 3.50 }
];

let some = students.some(item=> item.cgpa>3);
console.log(some)

let every = students.every(item=> item.cgpa >3);
console.log(every);