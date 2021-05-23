// https://www.codewars.com/kata/58b57ae2724e3c63df000006

'use strict';

function getRGB(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(-2), 16);

  let rgb = {
    r: r,
    g: g,
    b: b
  };

  return rgb;
}

function parseHTMLColor(color) {
  if (color.toLowerCase() in PRESET_COLORS) {
    let presetColor = PRESET_COLORS[color.toLowerCase()];
    return getRGB(presetColor);
  }

  else if (color.length === 7) {
    return getRGB(color);
  }

  else {
    let toHexcolor = color.split('').map(trihex => trihex + trihex).join('').slice(1);
    return getRGB(toHexcolor);
  }
}
