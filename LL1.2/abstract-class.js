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