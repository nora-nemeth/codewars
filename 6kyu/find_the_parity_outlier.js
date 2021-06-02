// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

'use strict';

function findOutlier(integers){
  const odds = integers.filter(num => num % 2 !== 0);
  const evens = integers.filter(num => !odds.includes(num));
  
  return odds.length > evens.length ? Number(integers.filter(num => num % 2 === 0)) : Number(integers.filter(num => num % 2 !== 0));
}
