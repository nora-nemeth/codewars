// https://www.codewars.com/kata/550f22f4d758534c1100025a

'use strict';

//  Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])


function dirReduc(directions){
  if(directions.length < 3) {
    return directions;
  }
  
  if(directions.length > 1) {
    for(let i = 0; i < directions.length; i++) {
      if(directions[i].toLowerCase() === 'north' && directions[i + 1].toLowerCase() === 'south') {
        directions.splice(0, 2);
        i = 0;
      }

      else if(directions[i].toLowerCase() === 'south' && directions[i + 1].toLowerCase() === 'north') {
        directions.splice(0, 2);
        i = 0;

      }

      else if(directions[i].toLowerCase() === 'east' && directions[i + 1].toLowerCase() === 'west') {
        directions.splice(0, 2);
        i = 0;

      }

      else if(directions[i].toLowerCase() === 'west' && directions[i + 1].toLowerCase() === 'east') {
        directions.splice(0, 2);
        i = 0;
      }
    }
  }

  return directions;
}
console.log(dirReduc(['north', 'west', 'west']));