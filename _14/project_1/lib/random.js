let random = {};

random.getRandom = (min, max) => {
  let minNumber = typeof min === "number" ? min : 0;
  let maxNumber = typeof max === "number" ? max : 0;
  return Math.floor(Math.random() * (maxNumber - minNumber+1) + minNumber);
};


module.exports = random;