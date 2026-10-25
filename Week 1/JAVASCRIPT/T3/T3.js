'use strict'
let result;
const a = parseFloat(prompt('Enter length of side a:'));
const b = parseFloat(prompt('Enter length of side b:'));
const c = parseFloat(prompt('Enter length of side c'));

if (a == b && b == c && c == a) {
    result = 'Equilateral';}
    else if (a == b || b == c || c == a) {
        result = 'Isosceles';}
    else if (a !== b && b !== c && c !== a) {
        result = 'Scalene';}
    else {
        result = 'Error unable to determine triangle type';
    }