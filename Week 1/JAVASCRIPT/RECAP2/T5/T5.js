'use strict';
const numbers = [3,6,1,10,34,21,33,19];

function sortArray(numbers, order) {
    if (order == 'asc') {
        numbers.sort((a, b) => a - b);
    } else if (order == 'desc') {
        numbers.sort((a, b) => b - a);
    } else {console.log('Could not sort array.');}
}

sortArray(numbers, 'asc');
// Fixed a Live Object Referencing issue by making a spread operator and new array
console.log([...numbers]);
sortArray(numbers, 'desc');
console.log([...numbers]);