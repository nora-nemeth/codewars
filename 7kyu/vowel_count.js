// https://www.codewars.com/kata/54ff3102c1bad923760001f3

'use strict';

const vowels = ['a', 'e', 'i', 'o', 'u'];

function getCount(str) {
  let vowelsCount = 0;
  
  for(const char of str) {
    if(vowels.includes(char)) {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}
