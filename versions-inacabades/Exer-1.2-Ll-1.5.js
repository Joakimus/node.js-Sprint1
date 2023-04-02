/*Nivell 1 - Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const fs = require('fs');
ruta='dades'
nom_fitx='test.txt';

fs.readFile(`${ruta}/${nom_fitx}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


