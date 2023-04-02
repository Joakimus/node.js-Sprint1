/* Nivell2 - Exercici 2
Crea una funció que llisti per la consola el contingut del directori d'usuari/ària 
de l'ordinador utilizant Node Child Processes. */

const path = require('path');
const fs = require('fs');
let ruta='dades';
const directoryPath = path.join(__dirname, ruta);

//Manera 1
function llistaDir(dirPath){
  fs.readdir(dirPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    files.forEach(function (file) {
        console.log(file); 
    });
});
}
llistaDir(directoryPath);

//Manera 2 - Executant ordre del sistema i variable d'entorn $HOME 
const { exec } = require('child_process');
function llistaDirUser() {
    exec('ls -l $HOME', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
}
llistaDirUser();