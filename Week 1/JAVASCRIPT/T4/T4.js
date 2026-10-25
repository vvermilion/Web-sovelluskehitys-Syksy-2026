'use strict';
let grade;

const score = prompt('Enter your score between 0-100:');

if (score < 0 || score > 100) {
    grade = 'Error, score must be bigger than 0 and smaller than 100';
} else if (score <= 39) {
    grade = 0;
} else if (score <= 51) {
    grade = 1;
} else if (score <= 63) {
    grade = 2;
} else if (score <= 75) {
    grade = 3;
} else if (score <= 87) {
    grade = 4;
} else grade = 5;

document.getElementById('grade').textContent = grade;