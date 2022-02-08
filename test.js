let counter = 0;

// This function closure increments the counter's state in the outer lexical context.
// This way the counter can be shared between many calling contexts.
function increment() {
  counter += 1;
  return counter;
}

console.log(increment())