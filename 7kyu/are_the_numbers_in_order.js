// https://www.codewars.com/kata/56b7f2f3f18876033f000307

'use strict';

function inAscOrder(arr) {
  return arr.join('') === arr.sort((a, b) => a - b).join('');
}
