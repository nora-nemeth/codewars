// https://www.codewars.com/kata/54dc6f5a224c26032800005c

'use strict';

function stockList(listOfArt, listOfCat){
  if(!listOfArt.length || !listOfCat.length) {
    return '';
  }
  
  let splittedArray = [];
  
  for(const stock of listOfArt) {
    splittedArray.push(stock.split(' '));
  }

  let counter = {}

  for(const category of listOfCat) {
    counter[category] = 0;
  }

  for(const code of splittedArray) {
    if(code[0][0] in counter) {
      counter[code[0][0]] += +code[1];
    }
  }

  let counterKeys = Object.keys(counter);
  let counterValues = Object.values(counter);

  let quantity = '';

  for(let index = 0; index < counterKeys.length; index++) {
    quantity += `(${counterKeys[index]} : ${counterValues[index]}) - `
  }

  return quantity.slice(0, -3);
}
