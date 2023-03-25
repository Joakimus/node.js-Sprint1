// Arrow functions - Exercici2
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut
const cacObject = ( param1, param2 ) => ( { 
                prop1: param1, 
                prop2: param2, 
            } ); // Returns an object
let myCacona = cacObject('Hola','Pimpollos');            
console.log("Valor del Paràmetre 1 = " + myCacona.prop1, "Valor del Paràmetre 2 = "+ myCacona.prop2);

