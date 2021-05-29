// https://www.codewars.com/kata/56dbe7f113c2f63570000b86

'use strict';

function rot(square) {
  return square.split('\n')
    .map(line => line.split(''))
    .map(line => line.reverse())
    .map(line => line.join(''))
    .reverse()
    .join('\n');
}

function selfieAndRot(square) {
  const selfieDotted = square.split('\n')
    .map(line => line.padEnd(line.length * 2, '.'))
    .join('\n');
  const rotDotted = rot(square).split('\n')
    .map(line => line.padStart(line.length * 2, '.'))
    .join('\n');
  return `${selfieDotted}\n${rotDotted}`;
}

function oper(operation, square) {
    return operation(square);
}
