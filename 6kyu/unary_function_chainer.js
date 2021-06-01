// https://www.codewars.com/kata/54ca3e777120b56cb6000710

'use strict';

function chained(functions) {
  return number => {
    for(const func of functions) {
      number = func(number);
    }
    return number;
  }
}
