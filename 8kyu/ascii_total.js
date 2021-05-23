// https://www.codewars.com/kata/572b6b2772a38bc1e700007a

'use strict';

function uniTotal(string) {
  let sum = 0;
  
  for(const char of string) {
    sum += char.charCodeAt();
  }
  
  return sum;
}
