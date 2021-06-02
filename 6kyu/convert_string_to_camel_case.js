// https://www.codewars.com/kata/517abf86da9663f1d2000003

'use strict';

function toCamelCase(str){
  let camelCase = '';
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '-' || str[i] === '_') {
      camelCase += str[i + 1].toUpperCase();
      i++;
    }
    else {
      camelCase += str[i];
    }
  }
  
  return camelCase;
}
