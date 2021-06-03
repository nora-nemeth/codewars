// https://www.codewars.com/kata/53c8b29750fe70e4a2000610/solutions/javascript

'use strict';

function ArrayComprehension({generator}) {
  const xpr = generator;
  if (! xpr || /^\s*$/.test(xpr)) {
    return [];
  }
  else if (! xpr.includes('.')) {
    return xpr.split(',').map(Number);
  }
  else if (! xpr.includes(',')) {
    const split = xpr.split('.');
    const start = Number(split[0]);
    const end = Number(split[2]);
    const result = [];
    for (let i = start; i <= end; ++i) {
      result.push(i);
    }
    return result;
  }
  else {
    const split1 = xpr.split(',');
    const split2 = split1[1].split('.');
    const start = Number(split1[0]);
    const step = Number(split2[0]) - start;
    const end = Number(split2[2]);
    const result = [];
    for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
      result.push(i);
    }
    return result;
  }
}
