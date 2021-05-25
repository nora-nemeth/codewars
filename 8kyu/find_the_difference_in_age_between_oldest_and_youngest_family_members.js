// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2

'use strict';

function differenceInAges(ages){
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  const difference = oldest - youngest;
  
  return [youngest, oldest, difference];
}
