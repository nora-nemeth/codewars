// https://www.codewars.com/kata/57a083a57cb1f31db7000028

'use strict';

function powersOfTwo(n){
  let powers = [];
  
  for(let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i));
  }
  
  return powers;
}
