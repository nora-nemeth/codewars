// https://www.codewars.com/kata/587731fda577b3d1b0001196

'use strict';

String.prototype.camelCase=function(){
  if (this == '') {
    return '';
  }
  
  return this.trim().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('');
}
