/*-Nivell 2- Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.*/

function funcioDouble(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof num === 'number'){ 
          let result = num*2;
          resolve(result);
        }else{
          reject("NO HAS INTRODUIT UN NUMERO");
        }
      }, 200); 
    }); 
  }
  
  async function asyncCrida(num1,num2,num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) {
                console.log('HAS D_INTRODUIR TRES NUMEROS');
                return "HAS D_INTRODUIR TRES NUMEROS";
     } else{
            console.log('Cridant a la funció asíncrona (espera de 2 segons)');
            let doble1 = await funcioDouble(num1);
            let doble2 = await funcioDouble(num2);
            let doble3 = await funcioDouble(num3);
            let suma = doble1+doble2+doble3;
            console.log(`La SUMA TOTAL de ${num1}, ${num2}, ${num3} = ${suma}`);
            return suma;
      } 
  }

  module.exports = {funcioDouble, asyncCrida};

  /* //Testing propi
   asyncCrida(5,25,30)
  .catch((error) => console.log(error));   
  asyncCrida(50,7,"x")
  .catch((error) => console.log(error)); 
  asyncCrida(50,7,23)
  .catch((error) => console.log(error));   
  asyncCrida(50,7,)
  .catch((error) => console.log(error));  
*/