// https://www.codewars.com/kata/5842df8ccbd22792a4000245

'use strict';

function expandedForm(num) {
  let expanded = [];
  
  for(let i = 0; i < num.toString().length; i++) {
    if (num.toString()[i] > 0) {
      const cutted = `${num.toString()[i]}${'0'.repeat(num.toString().length - 1 - i)}`;
      expanded.push(cutted);
    }
  }
  
  return expanded.join(' + ');
}
