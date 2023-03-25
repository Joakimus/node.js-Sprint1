//Arrow functions
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
