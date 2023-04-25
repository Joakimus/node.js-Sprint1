/*- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
que efectuï la seva funció resolve() després de 2 segons de la seva invocació. 
TESTING-Crea els tests corresponents per verificar el funcionament de les dues funcions 
de l'exercici Promises i Callbacks N1 E2.*/

executa2S = function executa2Seg() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('2seg');
      }, 2000);
    });
  }
  
module.exports.asyncFunc = async function asyncCrida() {
    console.log('Cridant a la funció asíncrona (espera de 2 segons)');
    const result = await executa2S();
    console.log(result);
    return result;
  }

 // asyncFunc();
  
