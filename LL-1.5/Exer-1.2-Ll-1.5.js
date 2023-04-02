/*Nivell 1 - Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */

const fs = require('fs');
const ruta='dades'
const nom_fitx='test.txt';
//Manera 1 - Us objectes del File system
function llegirFitx(fitx){
fs.readFile(fitx, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
    console.log(data);
    return
});
}
llegirFitx(`${ruta}/${nom_fitx}`);

//Manera 2 -Síncrona
function llegirFitx2(fitx){
        let fileContent = fs.readFileSync(fitx, 'utf8');
        console.log(fileContent); 
      }
llegirFitx2(`${ruta}/${nom_fitx}`);

//Manera 3 - Asincrona
async function llegirtFitx3(fitx) {
  let fileContent = await fs.promises.readFile(fitx, { encoding: "utf-8" });
  console.log(fileContent);
}
llegirtFitx3(`${ruta}/${nom_fitx}`, "utf-8")
.catch((error) => console.log(error));  
