/*Nivell 1 -- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.
Comprimir fitxer amb zlib.js*/

var zlib = require('zlib');
var fs = require('fs');
var zip = zlib.createGzip();

let dir='dades';
let nom_fitx='test.txt';

function comprimirFitx(ruta){
  fs.access(ruta, fs.F_OK, (err) => {
    if (err) {
             console.error(err)
             console.error("Fitxer NO existent. Introduieix un nom de fitxer vàlid, si us plau!");
             return
    }else{
        var read = fs.createReadStream(`${ruta}`);
        var write = fs.createWriteStream(`${dir}/fitx_comprimit.gz`);
        read.pipe(zip).pipe(write);	
        console.log("Fitxer comprimit!!!");		
    }
    });
}
let ruta=dir+'/'+nom_fitx;
comprimirFitx(ruta);