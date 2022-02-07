// @ts-nocheck

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // throw new Error('Implement the twoSum function');
  let number1 = Number(array1.join(""));
  let number2 = Number(array2.join(""));
  return number1 + number2;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return value === Number(value.toString().split('').reverse().join(''));
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // throw new Error('Implement the errorMessage function');
  if (input === "" || input === undefined || input === null) {
    return "Required field";
  } else if (Number(input)) {
    return "";
  } else {
    return "Must be a number besides 0";
  }
}
