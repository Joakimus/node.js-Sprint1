/*Lliurament 1.6 -Testing - Exercici 1.1
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. 
Testeja la correcta execució d'aquestes funcions.*/
//Font consultada: https://stackoverflow.com/questions/44302573/module-exports-multiple-functions-in-jest-testing

module.exports.sum = function suma(a,b){
    return a + b;
}
module.exports.rest = function resta(a,b){
    return a - b;
}
module.exports.multi = function multip(a,b){
    return a * b;
}

module.exports.div = function divi(a,b){
    return a / b;
}
