/*Importar un modulo
const math = require("./math");

console.log(math);


console.log(math.add(1, 2));
console.log(math.sub(1, 2));
console.log(math.mul(1, 2));
console.log(math.div(1, -1));


//Usando modulos preinstalados
const os = require("os");

console.log(os.platform());
console.log(os.release());
console.log("Freemem: ", os.freemem()," bytes");
console.log("TotalMem: ", os.totalmem()," bytes");
*/

const fs = require('fs');

/*
console.log("Inicio");

//código asíncrono
fs.writeFile("./texto.txt", "Linea 1", function (err) {
    if(err) throw err;
    console.log("Archivo creado");
});

console.log("Fin");
*/

fs.readFile('./texto.txt', function (err,data){
    if(err) throw err;
    console.log(data.toString());
});