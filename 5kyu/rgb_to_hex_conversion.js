// https://www.codewars.com/kata/513e08acc600c94f01000001

'use strict';

function normalize(number) {
  if (number < 0) {
    return 0;
  }
  if (number > 255) {
    return 255;
  }
  return number;
}

function toHex(number) {
  return number.toString(16)
    .padStart(2, '0')
    .toUpperCase();
}

function rgb(...numbers) {
  return numbers.map(normalize)
    .map(toHex)
    .join('');
}
