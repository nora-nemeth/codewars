// https://www.codewars.com/kata/5552101f47fc5178b1000050

'use strict';

function digPow(number, pow){
  let sumOfPows = 0;
  
  for(const digit of number.toString()) {
    sumOfPows += Math.pow(digit, pow);
    pow++;
  }
  
  return Number.isInteger(sumOfPows / number) ? sumOfPows / number : -1;
}
