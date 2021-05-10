// https://www.codewars.com/kata/57f222ce69e09c3630000212

'use strict';

function well(ideas){
  let goodIdeas = 0;
  for (idea of ideas) {
    if (idea === 'good') {
      goodIdeas++;
    }
  }
  switch(true) {
    case goodIdeas <= 2 && goodIdeas > 0:
      return 'Publish!';
    case goodIdeas > 2:
      return 'I smell a series!';
    default:
      return 'Fail!';
  }
}
