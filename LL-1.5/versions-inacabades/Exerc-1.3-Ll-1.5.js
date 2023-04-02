/*Nivell 1 -- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.*/

//comprimir fitxer amb zlib.js

var zlib = require('zlib');
var fs = require('fs');
var zip = zlib.createGzip();

var dir='dades';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Introdueix el nom del fitxer => `, nom_fitx => {
  console.log(`Nom del fitxer ${nom_fitx}`);
  readline.close();
  
  var ruta=dir+'/'+nom_fitx;
  fs.access(ruta, fs.F_OK, (err) => {
    if (err) {
      console.error(err)
      console.error("Fitxer NO existent. Introduieix un nom de fitxer vàlid, si us plau!");
      return
    }
    //Si el fitxer existeix
    var read = fs.createReadStream(`${ruta}`);
    var write = fs.createWriteStream(`${dir}/nou_fitxer.gz`);
    read.pipe(zip).pipe(write);	
    console.log("Fitxer comprimit!!!");		
    });
})