/* Nivell2 - Exercici 2
Crea una funció que llisti per la consola el contingut del directori d'usuari/ària 
de l'ordinador utilizant Node Child Processes. */

const path = require('path');
const fs = require('fs');
let ruta='dades';
const directoryPath = path.join(__dirname, ruta);
//Passsant laruta del dircetori de dades i callback function
fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});
