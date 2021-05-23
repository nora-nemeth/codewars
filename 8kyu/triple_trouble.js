// https://www.codewars.com/kata/5704aea738428f4d30000914

'use strict';

function tripleTrouble(one, two, three){
  let combination = '';
  
  for(let i = 0; i < one.length; i++) {
    combination += one[i] + two[i] + three[i];
  }
  
  return combination;
}
