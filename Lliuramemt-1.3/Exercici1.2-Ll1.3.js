//Lliurament SPRINT1 - 1.3

/*Exercici 1.2
Crea una arrow function que rebi un paràmetre i una funció callback 
i li passi a la funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut.*/

//Funció que permet introduir una edat i comprova si és Major d'edat o menor d'edat

const comprovaEdat = (edat, retorna) => {
    console.log(`Valor de l\'edat ${edat}`);
    retorna(edat);
}
const retorn = (edat) => {
    if (edat >= 18 && edat >0) {
        console.log(`Tens ${edat} Ets MAJOR d\'edat`)
    } else if (edat < 18 && edat >0) {
        console.log(`Tens ${edat} Ets menor d\'edat`);
    }else {
        console.log('ERROR! Valor erroni. Edat no possible');
    }
}
//COmprovacions
comprovaEdat(18, retorn);
comprovaEdat(17, retorn);
comprovaEdat(0, retorn);
