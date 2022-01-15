let random = require("./lib/random");
let words = require("./lib/words");

let app = {};
app.config = {
  interval: 1000,
};

let wordsGenerator = {};

wordsGenerator.random = () => {
  return words[random.getRandom(0, words.length - 1)];
};

let invokeFunction = () => {
  let generatedWord = "";
  setInterval(() => {
    generatedWord = wordsGenerator.random();
    console.log(generatedWord);
  }, app.config.interval);
};

invokeFunction();
