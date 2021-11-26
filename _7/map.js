let colors = ["red", "green", "blue", "teal"];

// console.log(mappedColors);

let mappedColors = colors.map(
  (color) => `<li style='color: ${color}'>Hello World</li>`
);

console.log(mappedColors);
