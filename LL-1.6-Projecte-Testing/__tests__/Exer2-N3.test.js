const { funcioDouble }  = require("../app/Ex-2.1_1.6");
const { asyncCrida }  = require("../app/Ex-2.1_1.6");
jest.useFakeTimers();

//Funció Double

test('rejects if the argument is not a number', async () => {
    jest.useRealTimers();
    await expect(funcioDouble('not a number')).rejects.toEqual('NO HAS INTRODUIT UN NUMERO');
  });

  test("NO HAS INTRODUIT UN NUMERO", async () => {
    jest.useRealTimers();
    try {
        await funcioDouble('x');    
    } catch (error) {
            expect(error).toBe("NO HAS INTRODUIT UN NUMERO");
    }
}); 

//Funció asyncCrida

test("Error. Some of the 3 parameters are not a number", async () => { 
    jest.useRealTimers();
    const expectedMessage = "HAS D_INTRODUIR TRES NUMEROS";
    try {
        const result = await asyncCrida(1, '2', 3);
        expect(result).toBe("HAS D_INTRODUIR TRES NUMEROS");
        } catch (error) {
             expect(error.message).toBe(expectedMessage);
      } 
});  
test("Error. Some of the 3 parameters are not a number", async () => { 
    jest.useRealTimers();
    const expectedMessage = "HAS D_INTRODUIR TRES NUMEROS";
    try {
        const result = await asyncCrida('1', 2, "3");
        expect(result).toBe("HAS D_INTRODUIR TRES NUMEROS");
        } catch (error) {
             expect(error.message).toBe(expectedMessage);
      } 
});  
test('logs an error message if any of the arguments is not a number', () => {
    jest.useRealTimers();
    const consoleSpy = jest.spyOn(console, 'log');
    asyncCrida('not a number', 2, 3);
    expect(consoleSpy).toHaveBeenCalledWith('HAS D_INTRODUIR TRES NUMEROS');
    consoleSpy.mockRestore();
  });
