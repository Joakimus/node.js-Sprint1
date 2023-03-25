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