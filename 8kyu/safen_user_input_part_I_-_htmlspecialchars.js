// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118

'use strict';

function htmlspecialchars(formData) {
  const characters = { 
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
  };
  
  const converted = formData.replace(/[<>"&]/g, character => characters[character]);
  
  return converted;
}
