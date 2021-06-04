// https://www.codewars.com/kata/53368a47e38700bd8300030d

'use strict';

function list(names){
  const length = Object.keys(names).length;
  
  if (length === 0) {
    return '';
  }
  
  else if (length === 1) {
    return names[0].name;
  }
  
  else if(length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  }
  
  else {
    let formattedNames = '';
    
    for(let i = 0; i < names.length - 1; i++) {
      formattedNames += `${names[i].name}, `
    }
    
    return `${formattedNames.slice(0, -2)} & ${names[length - 1].name}`;
  }
}
