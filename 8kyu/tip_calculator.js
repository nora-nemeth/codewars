// https://www.codewars.com/kata/56598d8076ee7a0759000087

'use strict';

const ratings = {
  terrible: 0,
  poor: 5,
  good: 10,
  great: 15,
  excellent: 20
};

function calculateTip(amount, rate) {
  if (!(rate.toLowerCase() in ratings)) {
    return 'Rating not recognised';
  }
  
  return Math.ceil(amount * (ratings[rate.toLowerCase()] / 100));
}
