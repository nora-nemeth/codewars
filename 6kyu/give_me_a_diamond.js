// https://www.codewars.com/kata/5503013e34137eeeaa001648

'use strict';

function diamond(n){
  if (n < 1 || n % 2 === 0) {
    return null;
  }
  
  let diamond = [];

  for(let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      const diamonds = '*'.repeat(i);
      const spaces = ' '.repeat((n - i) / 2);
      diamond.push(`${spaces}${diamonds}`);
    }
  }

  for(let j = n - 2; j > 0; j--) {
    if (j % 2 !== 0) {
      const diamonds = '*'.repeat(j);
      const spaces = ' '.repeat((n - j) / 2);
      diamond.push(`${spaces}${diamonds}`);
  }
  }

  return diamond.join('\n') + '\n';
}
