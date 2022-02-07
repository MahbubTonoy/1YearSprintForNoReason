// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // throw new Error('Please implement the totalBirdCount function');
  return birdsPerDay.reduce((acc, cur)=>{
    acc += cur;
    return acc;
  }, 0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // throw new Error('Please implement the birdsInWeek function');
  // let i = 7, j=i+7;
  // week -= 1;
  // week *= i;

  let i = (week-1)*7;
  let j = week*7;

  let totalBirdsPerWeek = 0;
  while(j>i && i<birdsPerDay.length) {
    totalBirdsPerWeek += birdsPerDay[i];
    i++;
  }
  return totalBirdsPerWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // throw new Error('Please implement the fixBirdCountLog function');
  for(let i=0; i<birdsPerDay.length; i++) {
    if(i%2 === 0) {
      ++birdsPerDay[i];
    }
  }
  return birdsPerDay;
}
