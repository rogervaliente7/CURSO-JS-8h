function saludar(nombre) {
    return `Hola, ${nombre}`;
}
//console.log(saludar("Roger"));
//console.log(module.exports);

function saludarHolaMundo() {
    return '!Hola, Mundo';
}

//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo =  saludarHolaMundo;

module.exports = {
saludar: saludar,
saludarHolaMundo: saludarHolaMundo,
};

//console.log(module.exports);