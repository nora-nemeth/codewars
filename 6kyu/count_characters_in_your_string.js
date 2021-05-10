// https://www.codewars.com/kata/52efefcbcdf57161d4000091

'use strict';

function count(string) { 
  const letterCounter = {};
  for (const letter of string) {
    typeof letterCounter[letter] === 'undefined' ? letterCounter[letter] = 1 : letterCounter[letter]++;
  }
  return letterCounter;
}
