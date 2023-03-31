/*Nivell 2 - Exercici 1
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/

function crida_recursiva(){
    setTimeout(() => {    
        console.log("Cacones!!!");
        crida_recursiva();
    }, 1000);
}
crida_recursiva();