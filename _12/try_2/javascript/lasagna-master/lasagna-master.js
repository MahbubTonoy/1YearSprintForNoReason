/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) {
    return "Lasagna is done.";
  } else if (timer > 0) {
    return "Not done, please wait.";
  }
  return "You forgot to set the timer.";
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  return layers.reduce((acc, cur) => {
   if(cur === 'noodles') {
    acc.noodles += 50;
   } else if(cur === 'sauce') {
    acc.sauce += 0.2;
   }
   return acc;
  }, {
    noodles: 0,
    sauce: 0,
  });
}

export function addSecretIngredient(friendsList, myList) {
 myList.push(friendsList[friendsList.length-1]);
}

export function scaleRecipe(recipe, amount) {
 if(!amount) {
  return recipe;
 }
 let singleRecipe = {};
 for(let item in recipe) {
  singleRecipe[item] = (recipe[item]/2)*amount;
 }
 return singleRecipe;
}
