/*- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */

function executadespres2Segons() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Promesa retornada i funcio resolta després de 2 segons');
      }, 2000);
    });
  }
  
  async function asyncCrida() {
    console.log('Cridant a la funció asíncrona (espera de 2 segons)');
    const result = await executadespres2Segons();
    console.log(result);
  }

  asyncCrida();
  


