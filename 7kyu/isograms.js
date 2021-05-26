// https://www.codewars.com/kata/54ba84be607a92aa900000f1

'use strict';

function isIsogram(string){
  const lowerCasedString = string.toLowerCase();
  for(let i = 0; i < lowerCasedString.length; ++i) {
    for(let j = i + 1; j < lowerCasedString.length; ++j) {
      if(lowerCasedString[i] === lowerCasedString[j]) {
        return false;
      }
    }
  }
  return true;
}
