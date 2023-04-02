/*Nivell 1 - Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/

const fs = require('fs');

const conti = 'Hola, sóc un fitxer de text on un Script de Node.js hi emmagatzemarà aquest informació';
//Afegim una segona cadena de text al mateix fitxer:
//Afegim un paràgraf:
let lyrics = '\nBut still I\'m having memories of high speeds when the cops crashed\n' + 
             'As I laugh, pushin the gas while my Glocks blast\n' + 
             'We was young and we was dumb but we had heart';

const ruta='dades'
const nom_fitx='test.txt';

function escriureFitx(fitx){
  fs.writeFile(fitx,conti+lyrics, err => {
    if (err) {
      console.error(err);
    }
    console.log('Fitxer modificat amb èxit!!!');
  });
}
escriureFitx(`${ruta}/${nom_fitx}`);