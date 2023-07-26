// console.log('Hola mundo');
// console.warn('Ocurrio un error...'); // console.log
// console.error(new Error('Ocurrio un error!'));
//MODULE process
// console.log(process.argv[2]);
// console.log(process.argv[3]);

// [node, app.js, 6, 7]
//   0     1      2  3

// for (let i = 2; i < process.argv.length; i++) {
//     console.log(process.argv[i]);
// }

//console.log(process.memoryUsage());

//modulo os
// const os = require('os');
// console.log(os.type());
// console.log(os.homedir());
// console.log(os.uptime());
// console.log(os.userInfo());

//Timeout

// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }
// setTimeout(mostrarTema, 3000, `Node.js`);

// function sumar(a, b) {
//   console.log(a+b);  
// }
// setTimeout(sumar, 5000, 5, 6);

//SetImmediate sirve para dar pioridad a una linea de codigo asincrono en la ejecucion
// function mostrarTema(tema) {
//     console.log(`Estoy aprendiendo ${tema}`);
// }
// console.log('Antes de setInmediate()');
// setImmediate(mostrarTema, 'Node.js');
// console.log('Despues de setInmediate');

//SetInterval **/Para ejecutar codigo un numero infinito de veces con un retraso especifico de milisegundos
// function sumar(a,b) {
//   console.log(a+b);
// }; 

// setInterval(sumar, 1500, 3, 4);

//Modulo fs, leer, modificar, copiar, eliminar, cambiar nombre de archivos, todos los metodos de este modulo son asincronos por defecto, no bloquean la ejecucion del programa

const fs = require('fs');
//leer el archivo
fs.readFile('indx.html', 'utf-8', (err, contenido) => {
  if (err){
    throw err;
    //console.log(err);
  } else {
    console.log(contenido);
  }
});