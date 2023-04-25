/*Lliurament SPRINT1 - 1.6- Exercici 1.2
Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut.*/
//Funció que permet introduir una edat i comprova si és Major d'edat o menor d'edat

const comprovaEdat = (edat, callback) => {
  let missatge = '';
  console.log(`Valor de l\'edat ${edat}. Tens ${edat} anys`);
  if (edat >= 18 && edat > 0) {
    missatge = `MAJOR d\'edat`;
  } else if (edat < 18 && edat > 0) {
    missatge = `Menor d\'edat`;
  } else {
    missatge = 'ERROR! Valor impossible';
  }
  return callback(missatge);
}

const retorna = (missatge) => {
  return missatge;
}

module.exports = {comprovaEdat, retorna};
