// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

'use strict';

//functional solution

function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(bird => !geese.includes(bird));
}

// imperative solution

function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let withoutGeese = [];
  
  for(const bird of birds) {
    if (!geese.includes(bird)) {
      withoutGeese.push(bird);
    }
  }
  
  return withoutGeese;
}
