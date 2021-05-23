// https://www.codewars.com/kata/514b92a657cdc65150000006

'use strict';

function solution(number){
  let arrayOfMultiplies = [];
  
  for(let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrayOfMultiplies.push(i);
    }
  }
  
  let sumOfMultiplies = arrayOfMultiplies.reduce((a, c) => a + c, 0);
  
  return sumOfMultiplies;
}
