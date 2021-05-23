// https://www.codewars.com/kata/5748a883eb737cab000022a6

'use strict';

const cannonsReady = (gunners) => {
  const answersArray = Object.values(gunners);
  const answersSet = new Set(answersArray);
  return answersSet.size > 1 ? 'Shiver me timbers!' : 'Fire!'
}
