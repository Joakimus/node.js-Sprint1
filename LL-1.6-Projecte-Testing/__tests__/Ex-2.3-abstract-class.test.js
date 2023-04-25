//Verifica mitjançant tests la creació d'instàncies de la classe abstracta 
//de l'exercici Classes & Arrow Functions N3 E1.

const { Person,  createObjects } = require('../app/Ex-2.3-abstract-class');
    
  test('Check that function createObjects returns an instance of class Person', () => {
      const p1 = createObjects('Pep');
      expect(p1 instanceof Person).toBe(true);
    });
    test('Check that funcioCrearObjectes returns an instance of class Person', () => {
      const p2 = createObjects('Aina');
      expect(p2 instanceof Person).toBe(true);
    });
  //Tests que han de fallar
  test('Function createObjects throws an error if no string param is passed', () => {
      expect(() => createObjects(true).toThrow('Error, parameter must be a String'));
    });
  test('Function createObjects throws an error if no string param is passed', () => {
      expect(() => createObjects(false).toThrow('Error, parameter must be a String'));
  });
  test('Function createObjectes throws an error if no string param is passed', () => {
    expect(() => createObjects(25).toThrow('Error, parameter must be a String'));
  });
  test('Function createObjectes throws an error if no string param is passed', () => {
    expect(() => createObjects(three).toThrow('Error, parameter must be a String'));
  });
  test('Function createObjectes throws an error if no string param is passed', () => {
    expect(() => createObjects().toThrow('Error, parameter must be a String'));
  });