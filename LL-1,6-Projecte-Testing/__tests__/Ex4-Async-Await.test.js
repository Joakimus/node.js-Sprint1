const modulAsyncAwait = require('../app/Ex4-Async-Await');
const { asyncFunc } = require("../app/Ex4-Async-Await");

describe("asyncFunc", () => {
  test("Hauria de resoldre i finalitzar deesprés de 2 segons", async () => {
    /*const start = Date.now();
    await asyncFunc();
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(2000);*/
    const result = await modulAsyncAwait.asyncFunc();
    console.log(`COMPROVACIÓ: VALOR DEL RESULTAT => ${result}`);
    expect(result).toMatch(/2seg/);
  });
});
