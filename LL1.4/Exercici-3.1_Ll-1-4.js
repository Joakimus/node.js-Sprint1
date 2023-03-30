/* Nivell 3 - Exercici 1
Força i captura tants errors com puguis dels nivells 1 i 2. */

/* He posat controls de comprovar que el tipus de dades sigui l'adequat
 if (typeof ID !== 'number') {

    Controlar l'existència: o sigui comprovar si la variable realment té valor i la dada existeix
  if (salari) {

    Amb el reject controlar el cas en que la Promise no retorni valor o un valor erroni/no esperat
reject(`ERROR! L\'empleat ${ID} no existeix`);

Comprovar  que les 2 variables tinguin valor per a llavors treure els resultats (en cas contrari el programa ja no ho calcula)
if ( result1 && result2){

    Bucle que recorre tot l'array d'Employees sencer: no hi ha possibilitat d'errada ja que no cal introduir el número d'employee
employees.forEach(function (arrayItem) {

Controlar  el tipus de dades de tots els paràmetres (numèrics) num1,num2,num3 que introdueix l'usuari en fer la crida de la funció
Crida:  asyncCrida(50,7,23) 
Control:
if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number' ) {

He implementat primer el reject i després el resolve tal i com m'has dit tu:
  if (typeof num !== 'number'){
          reject("NO HAS INTRODUIT UN NUMERO CARALLOT!!!");
        }else{
          let result = num*2;
          resolve(result);
        }
 Capturar els possibles errors de retorn de les Promises amb .catch
  asyncCrida(50,7,23)
  .catch((error) => console.log(error));  

*/


