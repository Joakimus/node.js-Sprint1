const {comprovaEdat}  = require("../app/Ex2-Callbacks");
const {retorna}  = require("../app/Ex2-Callbacks");

//Testeig-Comprovacions
test('comprovaEdat amb edat major de 18', () => {
   expect(comprovaEdat(100, retorna)).toBe('MAJOR d\'edat');
}); 
test('comprovaEdat amb edat igual a 18', () => {
    expect(comprovaEdat(18, retorna)).toBe('MAJOR d\'edat');
});

test('comprovaEdat amb edat menor de 18', () => {
    expect(comprovaEdat(17, retorna)).toBe('Menor d\'edat');
}); 
test('comprovaEdat amb edat igual a 0', () => {
    expect(comprovaEdat(0, retorna)).toBe('ERROR! Valor impossible');
}); 
test('comprovaEdat amb edat igual a -10', () => {
    expect(comprovaEdat(-10, retorna)).toBe('ERROR! Valor impossible');
});
