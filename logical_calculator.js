//https://www.codewars.com/kata/57096af70dad013aa200007b

'use strict';

const operations = {
  AND: (a, b) => a && b,
  OR: (a, b) => a || b,
  XOR: (a, b) => (!a && b) || (a && !b)
};

function logicalCalc(booleans, operator) {
  const operation = operations[operator];
  return booleans.reduce(operation);
}
