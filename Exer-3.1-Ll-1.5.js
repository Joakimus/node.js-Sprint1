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
const iv = crypto.randomBytes(16); //initVector

const ruta='dades';
const nom_fitx='test.txt';

function llegirFitx(fitx){
        let fileContent = fs.readFileSync(fitx, 'utf8');
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

function eliminar_fitxer(path_fitx){
fs.unlink(path_fitx, function (err) {            
    if (err) {                                                 
        console.error(err);
        console.log('File Not Found!');                                    
    }else{
        console.log('File Deleted Successfuly!');      
    }                                                                      
});
}
    //CODIFICAR A HEXADECIMAL I BASE64 i DESCODIFICACIÓ
    let dades = llegirFitx(`${ruta}/${nom_fitx}`);
    const convert = (from, to) => str => Buffer.from(str, from).toString(to);
    const utf8ToHex = convert('utf8', 'hex');
    const hexToUtf8 = convert('hex', 'utf8');

    let cadena_hex = utf8ToHex(dades);
    escriure_fitxer(`${ruta}/fitxer.hex`, cadena_hex, 'hexa');

    let data64 = nodeBase64.encode(dades);
    escriure_fitxer(`${ruta}/fitxer.base64`,data64, 'Base64');

//B) Encriptació 
const key = '123456789024681234567890';
const password = 'bncaskdbvasbvlaslslasfhj';

function criptoFitx(text,tipus) {
           let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let encrypted = cipher.update(text);            
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            let encryptedData = encrypted.toString('hex');
            if (tipus === 'hexa') escriure_fitxer(`${ruta}/fitxer_${tipus}.aes`, encryptedData, 'hexa');
            if (tipus === 'base64') escriure_fitxer(`${ruta}/fitxer_${tipus}.aes`, encryptedData, 'Base64');
            return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}
//C) Desencriptació  dels fitxers encriptats 
function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    let sortida = decrypted.toString();
    return decrypted.toString();
}

//B) Generació dels fitxers encriptats
let outputHexa = criptoFitx(cadena_hex,'hexa');
let outputBase64 = criptoFitx(data64,'base64');
//B) Eliminació de fitxers
eliminar_fitxer(`${ruta}/fitxer.hex`);
eliminar_fitxer(`${ruta}/fitxer.base64`);

//C) Desencriptació dels fitxers encriptats
let hexDecrypted = decrypt(outputHexa);
let base64Decrypted = decrypt(outputBase64);

//C) Descodificar els fitxers Hexa i Base64 /Generar fitxers finalsenformat texte/Eliminar fitxers encriptats .aes
//let decodedHex = hexToUtf8(cadena_hex);
let decodedHex = hexToUtf8(hexDecrypted);
escriure_fitxer(`${ruta}/fitxer_original-hex.txt`,decodedHex, 'text');

let decodedBase64 = nodeBase64.decode(base64Decrypted);
escriure_fitxer(`${ruta}/fitxer_original-base64.txt`,decodedBase64, 'text');

eliminar_fitxer(`${ruta}/fitxer_hexa.aes`);
eliminar_fitxer(`${ruta}/fitxer_base64.aes`);
