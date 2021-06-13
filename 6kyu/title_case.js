// https://www.codewars.com/kata/5202ef17a402dd033c000009

'use strict';

function titleCase(title, minorWords) {  
  if (title === '') {
    return '';
  }
  
  let titleArray = title.toLowerCase().split(' ');
  
  if (minorWords === undefined) {
    let titleCased = '';
    
    for(const word of titleArray) {
        titleCased += `${word[0].toUpperCase()}${word.slice(1)} `;
     }
    return titleCased.trim();
  }
  
  let minorWordsArray = minorWords.toLowerCase().split(' ');
  let titleCased = '';
  
  for(const word of titleArray) {
    if(!minorWordsArray.includes(word)) {
      titleCased += `${word[0].toUpperCase()}${word.slice(1)} `;
    }
    else {
      titleCased += `${word} `;
    }
  }
  
  titleCased = titleCased[0].toUpperCase() + titleCased.slice(1, -1);
  
  return titleCased;
}
