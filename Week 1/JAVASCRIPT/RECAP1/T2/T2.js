'use strict';

const x1 = parseFloat(prompt('Enter x coordinate for first point:'));
const y1 = parseFloat(prompt('Enter y coordinate for first point:'));
const x2 = parseFloat(prompt('Enter x coordinate for second point:'));
const y2 = parseFloat(prompt('Enter y coordinate for second point:'));

const x1x2 = x2 - x1;
const pwr1 = Math.pow(x1x2, 2);
const y1y2 = y2 - y1;
const pwr2 = Math.pow(y1y2, 2);

const distance = Math.sqrt(pwr1 + pwr2);

document.getElementById('distance').textContent = distance.toFixed(2);
