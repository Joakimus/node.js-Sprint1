/*Lliurament SPRINT1 - 1.3 Exercici 1.1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent,
depenent de si la Promise es resol o no.  */

//Exemple1:  amb un delay (Timeout de 2 segons)  

function retornaPromesa() {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      let totCorrecte = true;
      //let totCorrecte = false;
      if (totCorrecte) {
        resolve('Tutto bene.Tutto a posto!');
      } else {
        reject('Cacca de la Vacca!!!');
      }
    }, 2000)
  });
}

retornaPromesa()
  .then( resposta => console.log(resposta) )
  .catch( error => console.log(error) )

  
  //Exemple2 
// Funcion que recibe un callback para un valor aleatorio de 0-100 y
function valorAleatorio(callback) {
  const valor = Math.random() * 100;

  callback(Math.round(valor));
}

valorAleatorio((valor) => {
  console.log('Valor', valor);
});

function valorAleatorioPromesa() {
  const promise = new Promise((resolve, reject) => {
    valorAleatorio((valor) => {
      if (valor < 60) {
        reject('Valor menor a 60');
      } else {
        resolve(valor);  
      }
    });
  });

  return promise;
}

valorAleatorioPromesa()
  .then((valor) => {
    console.log('Valor promesa', valor);
  })
  .catch((error) => {
    console.log('Error capturado => ', error);
  });
