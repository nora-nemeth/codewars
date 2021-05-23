// https://www.codewars.com/kata/59c8b38423dacc7d95000008

'use strict';

function isValid(formula){
  const a = formula.includes(1) && formula.includes(2);
  const b = formula.includes(3) && formula.includes(4);
  const c = formula.includes(5) && formula.includes(6);
  const d = formula.includes(7) || formula.includes(8);
  
  return formula.includes(5) || formula.includes(6)
    ? !a && !b && c && d
    : !a && !b && d;
}
