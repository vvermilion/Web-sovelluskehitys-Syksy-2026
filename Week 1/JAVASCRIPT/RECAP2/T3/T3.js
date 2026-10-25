'use strict';
let numbers = [];
let evenNumbers = [];
let input;

input = prompt('Enter a number. To finish, type "done"');
while (input != 'done') {
    numbers.push(input);
    input = prompt('Enter a number. To finish, type "done"');
}
console.log('Adding numbers finished.');
for (let number of numbers) {
    if (number % 2 == 0) {
        evenNumbers.push(number);
    }
}
if (evenNumbers.length == 0) {
    document.getElementById("evenNumbers").textContent = 'none';
} else document.getElementById("evenNumbers").textContent = evenNumbers;

