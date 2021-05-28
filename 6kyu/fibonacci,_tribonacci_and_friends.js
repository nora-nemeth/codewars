// https://www.codewars.com/kata/556e0fccc392c527f20000c5

'use strict';

function Xbonacci(signature,n){
  if (n < signature.length) {
    let xbonacci = [];
    
    for(let i = 0; i < n; i++) {
      xbonacci.push(signature[i]);
    }
    
    return xbonacci;
  }
  
  const length = signature.length;
  
  let xbonacci = [];
  for(const num of signature) {
    xbonacci.push(num);
  }
  
  for(let i = 0; i <= n - length - 1; i++) {
    let nextNum = xbonacci.slice(i, i + length).reduce((a, c) => a + c, 0);
    xbonacci.push(nextNum);
  }
  
  return xbonacci;
}
