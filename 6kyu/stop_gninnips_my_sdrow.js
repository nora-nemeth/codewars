// https://www.codewars.com/kata/5264d2b162488dc400000001

'use strict';

function spinWords(string){
  let wordsArray = string.split(' ');
  
  let modifiedString = [];
  
  for(const word of wordsArray) {
    word.length >= 5
      ? modifiedString.push(word.split('').reverse().join(''))
      : modifiedString.push(word);
  }
  
  return modifiedString.join(' ');
}
