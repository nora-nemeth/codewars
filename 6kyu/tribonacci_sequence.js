// https://www.codewars.com/kata/556deca17c58da83c00002db

'use strict';

function tribonacci(signature,n){
  if (n < 3) {
    return signature.slice(0, n);
  }
  
  let sequence = [signature[0], signature[1], signature[2]];
  
  for(let i = 0; i < n - 3; i++) {
    let nextDigit = sequence.slice(i, i + 3).reduce((a, c) => a + c);
    sequence.push(nextDigit); 
  }
  
  return sequence;
}
