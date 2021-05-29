// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

'use strict';

function solution(str){
  let splitted = [];
  
  for(let i = 0; i < str.length; i++) {
    if (typeof str[i] === 'string' && typeof str[i + 1] === 'string') {
      splitted.push(str[i] + str[i + 1]);
      i++
    }
    else {
      splitted.push(str[i] + '_') 
    }
  }
  
  return splitted;
}
