// https://www.codewars.com/kata/52761ee4cffbc69732000738

'use strict';

const goodsWorth = [1, 2, 3, 3, 4, 10];
const evilsWorth = [1, 2, 2, 2, 3, 5, 10];

function goodVsEvil(good, evil){
  const goodBattles = good.split(' ').map(Number);
  const evilBattles = evil.split(' ').map(Number);
  
  let goodForce = 0;
  let evilForce = 0;
  
  for(let i = 0; i < goodBattles.length; i++) {
    goodForce += (goodsWorth[i] * goodBattles[i]);
  }
  
  for(let i = 0; i < evilBattles.length; i++) {
    evilForce += (evilsWorth[i] * evilBattles[i]);
  }
  
  return goodForce > evilForce
         ? 'Battle Result: Good triumphs over Evil'
         : goodForce < evilForce 
         ? 'Battle Result: Evil eradicates all trace of Good'
         : 'Battle Result: No victor on this battle field';
}
