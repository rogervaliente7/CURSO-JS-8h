//const saludos = require('./saludos.js'); // is a way to call some module

const {saludar, saludarHolaMundo } = require('./saludos.js');

//console.log(saludos.saludar('Roger'));

//console.log(saludos.saludarHolaMundo());

console.log(saludarHolaMundo());
console.log(saludar('Roger Valiente'));