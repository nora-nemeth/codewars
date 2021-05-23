// https://www.codewars.com/kata/55225023e1be1ec8bc000390

'use strict';

function greet(name){
  if(name === "Johnny") {
    return "Hello, my love!";
  }
  else {
    return "Hello, " + name + "!";
  }
}


// ARROW FUNCTION SOLUTION

const greet = name => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;
