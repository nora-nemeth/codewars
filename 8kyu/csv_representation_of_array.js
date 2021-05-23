// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

'use strict';

function toCsvText(numbers) {
  let csv = '';
  
  for (const number of numbers) {
    csv += `${number}\n`;
  }
  
  return csv.slice(0, -1);
}
