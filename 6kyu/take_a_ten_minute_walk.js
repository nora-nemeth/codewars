// https://www.codewars.com/kata/54da539698b8a2ad76000228

'use strict';

function isValidWalk(walk) {
  let nValue = walk.filter(direction => direction === 'n').length;
  let sValue = walk.filter(directios => directios === 's').length;
  let eValue = walk.filter(directioe => directioe === 'e').length;
  let wValue = walk.filter(directiow => directiow === 'w').length;
  
  console.log(walk)
  return nValue === sValue && eValue === wValue && walk.length === 10;
}
