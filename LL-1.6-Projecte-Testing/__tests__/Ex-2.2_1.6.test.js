const { Persona } = require('../app/Ex-2.2_1.6'); // import the Persona class

describe('Persona', () => {
  //La referència al mock de la classe Persona ha d'estar dins del mateix àmbit (describe) de les dues funcions 
  jest.mock('../app/Ex-2.2_1.6.js');  
  describe('dirNom', () => {
    test('returns the correct name', () => {
      const persona = new Persona('John', 'Doe', 'male', 30);
      Persona.prototype.dirNom = jest.fn().mockReturnValue("NOM: John");
      expect(persona.dirNom()).toBe('NOM: John');
    });
  });

  describe('mostrarInfo', () => {
    test('returns the correct info', () => {
      const persona = new Persona('Jane', 'Doe', 'female', 25);
      expect(persona.mostrarInfo()).toBe('NOM: Jane | COGNOM: Doe | Genere: female | EDAT: 25');
    });
  });
});

