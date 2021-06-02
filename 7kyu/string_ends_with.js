// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

'use strict';

function solution(str, ending) {
  const reversedStr = str.split('').reverse().join('');
  const reversedEnding = ending.split('').reverse().join('');
  
  let counter = 0;
  
  for(let i = 0; i < reversedEnding.length; i++) {
    if (reversedEnding[i] === reversedStr[i]) {
      counter += 1;
    }
  }
  
  return counter === ending.length;
}