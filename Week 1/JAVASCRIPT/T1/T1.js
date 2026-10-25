'use strict';
const cTemperature = prompt('Enter tempeature in Celcius:');
const fTemperature = (parseFloat(cTemperature) * 9/5) + 32;
const kTemperature = (parseFloat(cTemperature) + 273.15);

document.getElementById('fahrenheit').textContent = fTemperature;
document.getElementById('kelvin').textContent = kTemperature.toFixed(2);