let item = [
 "Tonoy",
 "Emon",
 "Rifat",
 "Tarun",
 "Asif",
 "Pavel",
 "Gazi",
 "Niloy",
 "Faisal",
 "Ishtiak",
 "Naim",
 "Muzammal",
 "Ananta",
 "Solayman",
 "Shohan",
 "Bijoy",
 "Parvez",
 "Anamul"
];

let group = item.reduce((acc, cur) => {
 let len = cur.charAt(0).toLocaleLowerCase();
 if (acc[len]) {
  acc[len].push(cur);
 }
 else {
  acc[len] = [cur];
 }
 return acc;
}, {});

console.log(group);