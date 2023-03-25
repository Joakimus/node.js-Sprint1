//Nivell3 - Exercici1
//Crea una funció anònima autoinvocable igualada a una variable 
//que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

const getNomUsuari = (nomUsu, data) => `El ${nomUsu} ha començat a estudiar  Node.js el ${data}`;
console.log(getNomUsuari('Pepelu', '2020') );
//Manera 2
const nomUsu = ((nomUsu, data) => {
                                   console.log(`El ${nomUsu} ha començat a estudiar  Node.js el ${data}`);
                                  })('Pepelu',2020);

const result = (x,y) => `El resultat de la suma és =  ${x + y}`;
console.log(result(4,6));
//Manera 2
const suma = ((x,y) => {
                        console.log(`El resultat de la suma és =  ${x + y}`);  
                    })(12,8);
//Manera 3
const mySuma = (a, b, c) => { return a + b + c };
console.log("El resultat de la suma és =" + mySuma(4,6,9));
//Manera 4
console.log("El resultat de la suma és = " +((item,num) => item + num)(8,22));
//Manera 5
console.log("SUMA=" + (bar => {
    const baz = 30;
    return bar + baz;
    })(40)); // -> 70
