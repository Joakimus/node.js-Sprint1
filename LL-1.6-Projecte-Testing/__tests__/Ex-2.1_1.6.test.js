const { funcioDouble }  = require("../app/Ex-2.1_1.6");
const { asyncCrida }  = require("../app/Ex-2.1_1.6");
jest.useFakeTimers();

//NORMAL FUNCTIONS BEHAVIOUR 

//Double numbers Function
test("Function get double of a number", async () =>{
    const promise = funcioDouble(50);
    jest.advanceTimersByTime(1000); 
    const result = await promise; 
    expect(result).toBe(100);
}); 

//Adding asyncron function suma()
test("Funció suma", async () => {
    jest.useRealTimers(); 
    const result = await asyncCrida(4, 5, 6); 
    expect(result).toBe(30);
});

test("Funció suma", async () => {
    jest.useRealTimers(); 
    const result = await asyncCrida(5, 25, 30); 
    expect(result).toBe(120);
});

//EXCEPTIONS AND POTENTIAL ERRORS OR PROGRAM FAILURES  
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
