// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

'use strict';

function twoSort(strings) {
  const first = strings.sort()[0];
  return first.split('').join('***');
}