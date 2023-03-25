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

// Arrow functions - Exercici2
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut
const cacObject = ( param1, param2 ) => ( { 
    prop1: param1, 
    prop2: param2, 
} ); // Returns an object
let myCacona = cacObject('Hola','Pimpollos');            
console.log("Valor del Paràmetre 1 = " + myCacona.prop1, "Valor del Paràmetre 2 = "+ myCacona.prop2);

/*Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.*/

class Persona{
    //ATRIBUTS
    nom;
    cognom;
    genere;
    edat;
    //Mètodes
    //Constructor per defecte (buit). Existeix sempre per defecte. 
    //Però compte que Javascript només permet tenir un únic constructor!!!!!
   // constructor(){}

    //Constructor
    constructor(nom,cognom, genere, edat){
        //Assigna valors als atributs, ja des del moment de la creació de l'objecte
        this.nom = nom;
        this.cognom = cognom;
        this.genere = genere;
        this.edat = edat;
    }
    dirNom(){
        return "NOM: " + this.nom;
    }
    mostrarInfo(){
        return "NOM: " + this.nom + " | "+ "COGNOM: " + this.cognom + " | " + "Genere: " + this.genere + " | " + "EDAT: " + this.edat;
    }
}
let person1 = new Persona("Pepelu");
person1.cognom = "Ramones";
person1.genere = "Home";
person1.edat = 28;
console.log(person1.dirNom());
console.log(person1.mostrarInfo());

/**
 * Abstract Class Animal.
 *
 * @class Animal
 */
class Animal {

    constructor() {
      if (this.constructor == Animal) {
        throw new Error("Les classes abstractes no es poden instanciar,de manera directa");
      }
    }
  //L'animal crida: emet un so
    crida() {
      throw new Error("El mètode crida() tampoc no es pot instanciar: s'ha d'implementar");
    }
   //L'animal menja
    menja() {
      console.log("Menjant");
    }
  }

  /**
 * Gos
 *
 * @class Gos
 * @extends {Animal}
 */
class Gos extends Animal {
    crida() {
      console.log("El Gos borda i fa bup bup (en català)");
    }
  }
  
  /**
   * Gat.
   *
   * @class Gat
   * @extends {Animal}
   */
  class Gat extends Animal {
    crida() {
      console.log("El gat miola");
    }
  }
  
  /**
   * Cavall.
   *
   * @class Cavall
   * @extends {Animal}
   */
  class Cavall extends Animal {}

  // SORTIDA: obtenció de Resultats
new Gos().menja();
new Gat().menja(); 
new Cavall().menja(); 

new Gos().crida(); // borda
new Gat().crida(); // miola

//Si volem demostrar que la classe Animal realment és abstracta
//ho podem provocar per exemple intentant crear una instància d'objecte, 
//directamet de la classe Animal,o bé també demanant a la classe Cavall que 
//que ens digui quina mena de so o crit emet. Com que cavall no 
//té aquest mètode com a propi, haurà ha de ser implementat, del 
//mètode de la classe pare, provocant l'errada.

new Cavall().crida(); // Error! El mètode crida() fallarà, ja que ha de ser implementat, del mètode de la classe pare

//new Animal(); // Error: Abstract classes can't be instantiated.
