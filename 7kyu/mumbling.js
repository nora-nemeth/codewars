// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

'use strict';

function accum(string) {
	let mumblingArr = [];
  
  for(let i = 0; i < string.length; i++) {
    mumblingArr.push(string[i].toUpperCase().padEnd(i + 1, string[i].toLowerCase()));
  }
  
  return mumblingArr.join('-');
}
