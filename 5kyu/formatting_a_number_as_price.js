// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

'use strict';

function numberToPrice(number) {
  if (number !== Number(number)) {
    return 'NaN';
  }
  
  return number.toLocaleString(
    'en-US',
    {
      maximumFractionDigits: 3,
      minimumFractionDigits: 3
    }
  )
  .slice(0, -1);
}
