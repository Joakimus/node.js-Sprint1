/* Nivell 3 - Exercici 1
A) Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.
B) Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials.
C) Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. */

const fs = require('fs');
var nodeBase64 = require('nodejs-base64-converter');
const crypto = require("crypto");
const algorithm = 'aes-192-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const ruta='dades';
const nom_fitx='test.txt';

function llegirFitx(fitx){
        let fileContent = fs.readFileSync(fitx, 'utf8');
        //console.log(fileContent); 
        return fileContent;
      }

function escriure_fitxer(path_fitx,dades,tipus){
    fs.writeFile(path_fitx,dades, err => {
        if (err) {
          console.error(err);
        }
        console.log(`Fitxer tipus ${tipus} creat amb èxit!!!`);
      });
}

let dades = llegirFitx(`${ruta}/${nom_fitx}`);

    const bufferText = Buffer.from(dades, 'utf-8');
    let cadena_hex = bufferText.toString('hex');
    console.log("Sortida del fitxer de dades en mode Hexadecimal =>\n", cadena_hex);
    escriure_fitxer(`${ruta}/fitxer.hex`, cadena_hex, 'hexa');

    //COMPROVACIÓ (Només format de visualitació més tipus Hexadecimal)
    var convertHex = require('convert-hex');
    console.dir(convertHex.hexToBytes(cadena_hex).join(','));

    let data64 = nodeBase64.encode(dades);  
    console.log("\n Dades del Fitxer  codificat en Base64 => \n"+ data64);
    escriure_fitxer(`${ruta}/fitxer.base64`,data64, 'Base64');

//Encriptació
function criptoFitx(text) {
    let cipher = crypto.createCipheriv('aes-192-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
 }
 console.log(dades);
 criptoFitx(dades);
/*
function criptoFitx(){
        const cipher = crypto.createCipheriv("aes-192-cbc",key, iv);
        cipher.update(dades);
        const encrypted = cipher.final();
    }
*/