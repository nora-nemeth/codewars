// https://www.codewars.com/kata/5a00a8b5ffe75f8888000080

'use strict';

function replaceZero(numbers) {
  const zeroIndices = [];
  const leftOnes = [];
  const rightOnes = [];

  let counter = 0;
  for (let index = 0; index < numbers.length; ++index) {
    if (numbers[index] === 0) {
      zeroIndices.push(index);
      leftOnes[index] = counter;
      counter = 0;
    }
    else if (numbers[index] === 1) {
      ++counter;
    }
  }

  counter = 0;
  for (let index = numbers.length - 1; index >= 0; --index) {
    if (numbers[index] === 0) {
      rightOnes[index] = counter;
      counter = 0;
    }
    else if (numbers[index] === 1) {
      ++counter;
    }
  }

  let max = -Infinity;
  let maxIndex = -1;
  for (const index of zeroIndices) {
    const sum = leftOnes[index] + rightOnes[index];
    if (sum >= max) {
      max = sum;
      maxIndex = index;
    }
  }

  return maxIndex;
}
