// https://www.codewars.com/kata/54da5a58ea159efa38000836

'use stirct';

function findOdd(numbers) {
  let counter = {};
  
  for(const number of numbers) {
    if (number in counter) {
      counter[number] += 1;
    }
    else {
      counter[number] = 1;
    }
  }
  
  for(const key in counter) {
    if(counter[key] % 2 !== 0) {
      return Number(key);
    }
  }
}
