// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b

'use strict';

const excludingVatPrice = price => price === null ? -1 : Number((price / 1.15).toFixed(2));
