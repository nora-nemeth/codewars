// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

'use strict';

function duplicateEncode(word){
  const lowerCased = word.toLowerCase();
  
  let characterCounter = {};
  
  for(const letter of lowerCased) {
    letter in characterCounter ? characterCounter[letter] += 1 : characterCounter[letter] = 1;
  }
  
  let code = '';
  
  for(const character of lowerCased) {
    characterCounter[character] > 1 ? code += ')' : code += '(';
  }
  
  return code;
}
