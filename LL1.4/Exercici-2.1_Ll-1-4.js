/*-Nivell 2- Exercici 1
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.*/

function executadespres2Segons(num) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (typeof num !== 'number'){
          reject("NO HAS INTRODUIT UN NUMERO CARALLOT!!!");
        }else{
          let result = num*2;
          resolve(result);
        }
      }, 2000); 
    }); 
  }
  
  async function asyncCrida(num1,num2,num3) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) {
                console.log("NO HAS INTRODUIT UN NUMERO CARALLOT!!!");
     } else{
            console.log('Cridant a la funció asíncrona (espera de 2 segons)');
            let doble1 = await executadespres2Segons(num1);
            let doble2 = await executadespres2Segons(num2);
            let doble3 = await executadespres2Segons(num3);
            console.log(`La SUMA TOTAL = ${doble1+doble2+doble3}`);
      }
  }
  asyncCrida(50,7,23)
  .catch((error) => console.log(error));  
  asyncCrida(50,7,"x")
  .catch((error) => console.log(error));  
  asyncCrida(50,7,)
  .catch((error) => console.log(error));  
  


