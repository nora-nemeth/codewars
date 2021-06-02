// https://www.codewars.com/kata/54e6533c92449cc251001667

'use strict';

const uniqueInOrder = function(iterable) {
  let singleCharacters = [];
  
  for(let index = 0; index < iterable.length; index++) {
    if (iterable[index] !== iterable[index + 1]) {
      singleCharacters.push(iterable[index]);
    }
  }
  
  return singleCharacters;
}
