// https://www.codewars.com/kata/57cff961eca260b71900008f

'use strict';

function isVow(numbers) {
  const charCodes = [97, 101, 105, 111, 117];
  const converted = numbers.map(digit => charCodes.includes(digit) ? String.fromCharCode(digit) : digit);
  
  return converted;
}
