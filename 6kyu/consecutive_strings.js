// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

'use strict';

function longestConsec(strarr, k) {
  if (k < 0 || k > strarr.length) {
    return '';
  }
  
  let longestString = '';
  
  for(let i = 0; i < strarr.length; i++) {
    const currentString = strarr.slice(i, i + k).join('');
    
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }
  
  return longestString;
}
