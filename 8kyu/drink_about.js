// https://www.codewars.com/kata/56170e844da7c6f647000063

'use strict';

const drinks = [[13, 'drink toddy'], [17, 'drink coke'], [18, 'drink beer'], [20, 'drink beer'], [30, 'drink whisky']];

function peopleWithAgeDrink(old) {
  for(const option of drinks) {
    if (old <= option[0]) {
      return option[1];
    }
  }
}
