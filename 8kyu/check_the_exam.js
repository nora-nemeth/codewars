// https://www.codewars.com/kata/5a3dd29055519e23ec000074

'use strict';

function checkExam(solutions, answers) {
  let result = 0;
  
  for(let i = 0; i < solutions.length; i++) {
    switch (answers[i]) {
      case solutions[i]:
        result += 4;
        break
      case '':
        result += 0;
        break
      default:
       result -= 1;
    }
  }
  
  return result < 0 ? 0 : result;
}
