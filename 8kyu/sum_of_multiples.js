// https://www.codewars.com/kata/57241e0f440cd279b5000829

'use strict';

function sumMul(n, m){
  let result = [n];

  if (n <= 0 || m <= 0) {
    return 'INVALID';
  }
  else {
    for (let i = 0; result[result.length - 1] + n < m; i++) {
      result.push(result[result.length - 1] + n);
    }
  }
  return result.reduce((a, c) => a + c);
}

console.log(sumMul(2, 9));