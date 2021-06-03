// https://www.codewars.com/kata/550f22f4d758534c1100025a

'use strict';

//  Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])


function dirReduc(dir){
  for (let i = 1; i < dir.length; ++i) {
    const unnecessary = (dir[i - 1] === 'NORTH' && dir[i] === 'SOUTH')
      || (dir[i - 1] === 'SOUTH' && dir[i] === 'NORTH')
      || (dir[i - 1] === 'WEST' && dir[i] === 'EAST')
      || (dir[i - 1] === 'EAST' && dir[i] === 'WEST');
    
    if (unnecessary) {
      dir.splice(i - 1, 2);
      i = 0;
    }
  }
  return dir;
}
