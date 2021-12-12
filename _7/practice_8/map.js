let students = [
 { name: "Mahbub Rashid Tonoy", cgpa: 1.99 },
 { name: "Habibur Rahman Emon", cgpa: 4.99 },
 { name: "Jahidur Rahman Rifat", cgpa: 3.80 },
 { name: "Md Mehedi Hasan Niloy", cgpa: 3.60 },
 { name: "Faisal Ahmed", cgpa: 3.50 }
];

let messages = students.map(values => {
 return {
  ...values,
  message: `Hello ${values.name}, Your result has been published!\nYou got CGPA ${values.cgpa}, you have been ${values.cgpa > 3 ? 'passed' : 'failed'} in the exam.`
 }
});
console.log(messages);