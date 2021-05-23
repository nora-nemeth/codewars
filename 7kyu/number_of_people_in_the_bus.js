// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

'use strict';

const number = function(busStops) {
  let counter = 0;
  
  for(const station of busStops) {
    counter += station[0];
    counter -= station[1];
  }
  
  return counter;
}
