// https://www.codewars.com/kata/52597aa56021e91c93000cb0

'use stirct';

function moveZeros(array) {
  const result = array.filter(element => element !== 0);

  while (result.length < array.length) {
    result.push(0);
  }
  
  return result;
}
