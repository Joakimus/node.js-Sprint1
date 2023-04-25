//Classe Abstracta
class Person {
  constructor() {
    throw new Error("Constructor Error");
  }
}

function createPerson  (name) {
    this.name = name;
}

function createObjects (param){
    createPerson.prototype = Object.create(Person.prototype);
    let newperson = new createPerson (param);
    return newperson;
}

module.exports = { Person, createObjects, };
