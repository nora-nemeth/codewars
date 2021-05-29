//https://www.codewars.com/kata/5208f99aee097e6552000148

'use strict';

function solution(string) {
  let broken = '';
  
  for(const letter of string) {
    if(letter !== letter.toLowerCase()) {
      broken += ` ${letter}`;
    }
    else {
      broken += letter;
    }
  }
  
  return broken;
}
