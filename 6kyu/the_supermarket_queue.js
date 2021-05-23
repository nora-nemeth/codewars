// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

'use strict';

function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  
  else if (customers.length <= n) {
    return customers.sort((a, b) => a - b)[customers.length - 1];
  }
  
  let queues = [];
  
  for(let i = 0; i < n; i++) {
    queues.push(customers[i]);
  }

  for(let j = n; j < customers.length; j++) {
    queues.sort((a, b) => a - b);
    queues[0] += customers[j];
    queues.sort((a, b) => a - b);
  }  

  
  return queues[queues.length - 1];
}
