'use strict';
let result;
let sum = 0;
const positiveInteger = parseFloat(prompt('Enter positive integer:'));

if (positiveInteger < 0) {
    result = 'Error, integer must be positive';
}
for (let index = 0; index <= positiveInteger; index++) {
    sum = sum + index;
}
document.getElementById('positiveInteger').textContent = positiveInteger;
document.getElementById('result').textContent = sum;