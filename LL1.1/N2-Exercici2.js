//Nivell2-Exercici2
//Invoca una funció que retorni un valor des de dins d'una template literal.

function retornTemplate(edat) {
  return edat;             //Retornarà l'edat de l'usuari
}
  let nom = `Mariona`;
  let cognom = `De la O`;
  //let text_benvinguda = `Benvingut/da usuari/ària ${nom} ${cognom}`;
  console.log(`l'edat de l'auauri ${nom} ${cognom} és =  ${retornTemplate(33)}`);
