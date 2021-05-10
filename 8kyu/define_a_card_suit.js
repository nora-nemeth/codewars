// https://www.codewars.com/kata/5a360620f28b82a711000047

'use strict';

const suits = {
  '♣': 'clubs',
  '♦': 'diamonds',
  '♥': 'hearts',
  '♠': 'spades'
};

function defineSuit(card) {
  const symbol = card[card.length - 1];
  return suits[symbol];
}