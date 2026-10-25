const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const vegetables = [];
let vegetable;

console.log('Fruits: ' + fruits);
console.log('Length of fruits: ' + fruits.length);
console.log('Element at index two: ' + fruits[2]);
console.log('Last element in array: ' + fruits[fruits.length - 1]);

for (let index = 0; index < 3; index++) {
    vegetable = prompt("Enter vegetable:");
    vegetables.push(vegetable)
}
console.log('Vegetables: ' + vegetables);
console.log('Length of vegetables: ' + vegetables.length);