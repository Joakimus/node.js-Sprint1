Nivell 3 - Exercici 1 - READNE

REQUERIMENTS I FUNCIONALITAT DEL PROGRAMA 

A) Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.
B) Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, 
i esborri els fitxers inicials.
C) Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.
Inclou un README amb instruccions per a l'execució de cada part. 


DADES AMB lES QUE TREBALLA EL PROGRAMA

El programa fa totes les operacions (tasques) tant de llegir les dades del fitxer de text inicial, 
com d'escriptura: generar nous fitxers de dades intermitjos (codificats i encriptats) i els 2 fitxers finals,
que són COM una rèplica del fitxer inicial de dades (ja que contenen el mateix contingut), al sots

DIRECTORIS I FITXERS

Sots directori dades/
Fitxer de dades inicial: dades/test.txt

dades/
        test.txt
        fitxer.hex
        fitxer.base64
        fitxer_hexa.aes
        fitxer_base64.aes
        fitxer_original-base64.txt
        fitxer_original-hex.txt

Instruccions d'ús del Programa

La variable ruta (a tot el programa)conté la ruta relativa al directori de dades, abans esmentat.
(Internament és substituïda per ${ruta}) 

 //A) CODIFICAR A HEXADECIMAL I BASE64 i DESCODIFICACIÓ
    Crear dos fitxers codificats en hexadecimal i en base64 respectivament:

    A partir de la cadena codificada en Hexadecimal cadena_hex executem la funció escriure_fitxer
    amb la ruta/nom_del_fitxer.hex la cadena de dades en format hexadecimal i el tipus/format de fitxer:

    escriure_fitxer(`${ruta}/fitxer.hex`,  cadena _hex, 'hexa');
    
    A partir de la cadena codificada en Base64  data64 executem la funció escriure_fitxer
    amb la ruta/nom_del_fitxer.hex la cadena de dades en format base64 i el tipus/format de fitxer: 

    escriure_fitxer(`${ruta}/fitxer.base64`,data64, 'Base64');

//B) Encriptació: Generació dels fitxers encriptats
Cridem/executem a la funció criptoFitx amb els 2 formats de dades (Hexa i Base64) i aquesta ens retorna 
el contingut dels 2 fitxers 

let outputHexa = criptoFitx(cadena_hex,'hexa');
let outputBase64 = criptoFitx(data64,'base64');

ACLARIMENT:
La funció criptoFitx retorna un objecte format per l'initVector emprat per a fer l'encriptació, i també la cadena de 
dades encriptada, per a la funció decrypt per a que aquesta pugui fer la seva tasca de desencriptació de les dades dels fitxers.

ACLARIMENT
Realment, el programa internament treballa sempre que és possible, amb cadenes emmagatzemades a variables, 
i nomes fa operacions amb fitxers al disc, quan:
1.- toca llegir el contingut del fitxer de dades inicial.
2.- cal crear fitxers codificats o encriptats al disc.
3.- cal eliminar fitxers codificats o encriptats del disc.


//B) Eliminació de fitxers codificats (intermitjos)

Cal executar la funció eliminar_fitxer amb la ruta de dades i el nom del fitxer:
eliminar_fitxer(`${ruta}/fitxer.hex`);
eliminar_fitxer(`${ruta}/fitxer.base64`);

//C) Desencriptació dels fitxers encriptats

Cridem/executem a la funció decrypt, amb els 2 formats de dades (Hexa i Base64) i aquesta ens retorna 
el contingut ja desencriptat dels 2 fitxers (però encara codificat):
decrypt(outputHexa);
decrypt(outputBase64);
Retorna:
let hexDecrypted = decrypt(outputHexa);
let base64Decrypted = decrypt(outputBase64);

//C) Descodificar els fitxers Hexa i Base64 /Generar fitxers finals en format texte/Eliminar fitxers encriptats .aes
Amb les dades desencriptades que retorna la funció decrypt, el programa en fa la descodificació. 
A partir de les dades descodificades (en els 2 formats), per a generar els 2 fitxers finals (en text pla), cal executar:

escriure_fitxer(`${ruta}/fitxer_original-hex.txt`,decodedHex, 'text');
escriure_fitxer(`${ruta}/fitxer_original-base64.txt`,decodedBase64, 'text');

Eliminació de fitxers encriptats .aes 

Cal executar la funció eliminar_fitxer amb la ruta de dades i el nom del fitxer:

eliminar_fitxer(`${ruta}/fitxer_hexa.aes`);
eliminar_fitxer(`${ruta}/fitxer_base64.aes`);


RECURSOS

https://www.educative.io/answers/what-is-cryptocreatedecipherivalgorithm-key-iv-options

https://stackoverflow.com/questions/52261494/hex-to-string-string-to-hex-conversion-in-nodejs

https://livecodestream.dev/post/beginners-guide-to-data-encryption-with-nodejs/?utm_content=cmp-true

https://attacomsian.com/blog/nodejs-encrypt-decrypt-data?utm_content=cmp-true

https://www.educative.io/answers/what-is-cryptocreatedecipherivalgorithm-key-iv-options

https://www.section.io/engineering-education/data-encryption-and-decryption-in-node-js-using-crypto/

https://stackoverflow.com/questions/6953286/how-to-encrypt-data-that-needs-to-be-decrypted-in-node-js

https://www.tutorialspoint.com/crypto-createcipheriv-method-in-node-js


