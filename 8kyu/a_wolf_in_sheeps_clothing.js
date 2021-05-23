// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

'use strict';

function warnTheSheep(queue) {
  if (queue.indexOf('wolf') === queue.length - 1) {
    return 'Pls go away and stop eating my sheep';
  }
  else {
    return `Oi! Sheep number ${queue.length - queue.indexOf('wolf') - 1}! You are about to be eaten by a wolf!`;
  }
}
