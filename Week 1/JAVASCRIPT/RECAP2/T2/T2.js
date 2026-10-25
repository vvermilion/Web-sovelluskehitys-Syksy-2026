'use strict';
const numbers = [];
let number;
let numberCheck;

for (let index = 0; index < 5; index++) {
    number = prompt('Enter a number:');
    numbers.push(number);
}
console.log('Numbers in array: ' + numbers);

numberCheck = prompt('Enter number to check if it is in the array:');
if (numbers.includes(numberCheck)){
    console.log(numberCheck + ' is in the array.');
} else console.log(numberCheck + ' is not in the array');

console.log('Showing and deleting last item in array: ' + numbers.pop());
console.log('Numbers in array: ' + numbers);

console.log('Sorted array: ' + numbers.sort((a,b) => a - b));