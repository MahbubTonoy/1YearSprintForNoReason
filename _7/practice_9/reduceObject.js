let cart = [
 { name: 'Full Stack Development', price: 300 },
 { name: 'You Don\nt know javascript', price: 560 },
 { name: 'Full Stack Development', price: 300 },
 { name: 'Javascript Cookbook', price: 450 },
 { name: 'Full Stack Development', price: 300 },
 { name: 'You Don\nt know javascript', price: 560 },
 { name: 'Full Stack Development', price: 300 },
 { name: 'Javascript Cookbook', price: 450 }
];

let checkout = cart.reduce((acc, cur) => {
 if (!acc[cur.name]) {
  acc[cur.name] = {
   price: cur.price,
   quantity: 1
  }
 } else {
  acc[cur.name].price += cur.price;
  acc[cur.name].quantity++;
 }
 return acc;
}, {});

console.log(checkout);