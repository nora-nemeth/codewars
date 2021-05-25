// https://www.codewars.com/kata/55a13556ca4a6d0ab4000003

'use strict';

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(friends) {
      for(const friend of friends) {
        this._friends.push(friend);
      }
    }
  }
  return person;
}
