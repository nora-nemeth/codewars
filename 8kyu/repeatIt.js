// https://www.codewars.com/kata/557af9418895e44de7000053

'use strict';

const repeatIt = function(string, number) {
  if (typeof string !== 'string') {
    return 'Not a string';
  }
  else {
    return string.repeat(number);
  }
}
