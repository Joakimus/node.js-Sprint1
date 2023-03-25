//Nivell3 - Exercici1
//Crea una matriu de deu funcions i emplena-la mitjançant un bucle 
//de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. 
//Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

var matriuFuncions = [];

//Declarem com serà la funció 
//cada funció treurà 10 valors del (0..9)
function func(){
    for(let i=0; i<10; i++){        
        console.log(i);       
    }
}
//Creem 10 funcions amb un bucle for
for (let j=0;j<10;j++){
    console.log("Valor de la Iteració = ", j);
    matriuFuncions[j] = func();
}

