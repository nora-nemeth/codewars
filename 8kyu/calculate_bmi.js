// https://www.codewars.com/kata/57a429e253ba3381850000fb

'use strict';

function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2);
  
  return bmi <= 18.5
      ? 'Underweight'
      : bmi <= 25
      ? 'Normal'
      : bmi <= 30
      ? 'Overweight'
      : 'Obese';
}
