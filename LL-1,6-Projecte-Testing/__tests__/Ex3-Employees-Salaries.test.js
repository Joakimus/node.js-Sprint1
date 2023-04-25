 //CRIDES A LA FUNCIÓ-COMPROVACIONS - Exercici1
 const { getEmployee, getSalari } = require("../app/Ex3-Employees-Salaries");

 //Comprovació de que una promise existeix (per a aprendre)
 test("Supplies promise to check Employee idetinfied by id=1 exists", () => {
  let id=1;
    return expect(getEmployee(id)).toBeInstanceOf(Promise);
});

  //TESTING EMPLOYEES
   //MANERA 1: test.each =>  Simplify repetitive Jest test cases with test.each
    const casos = [[1,"Linux Torvalds"],[2, "Bill Gates"],[3, "Jeff Bezos"]];
    test.each(casos)("given %p and %p as arguments, returns %p", 
      async (numID, expectedNameEmployee) => {
        const result = await getEmployee(numID);
        expect(result.name).toBe(expectedNameEmployee);
        //expect(result).toEqual(expectedSalary);
      }
    );
  //MANERA 2: pròpia (molt més simple) un per un (cada Empleat)
    //id=1;
    test("Supplies Employee name idetinfied by id=1", async () => {
      let id=1;
      const result = await getEmployee(id)
      expect(result.name).toBe("Linux Torvalds");
    });
    //id=2 fet de 2 maneres diferents
    test("Supplies Employee name idetinfied by id=2", async () => {
      let id=2;
      const result = await getEmployee(id)
      expect(result.name).toBe("Bill Gates");
    }); 
    //Manera 2
    test("Supplies Employee's data idetinfied by id=2 (Bill Gates)", () => {
      id=2;
      return getEmployee(id).then((result) => expect(result.name).toBe('Bill Gates'));
    });
    //id=3
    test('Supplies Employee name idetinfied by id=3', async () => {
      let id=3;
      const result = await getEmployee(id)
      expect(result.name).toBe("Jeff Bezos");
    }); 

    //TESTS QUE HAN DE DETECTAR POSSIBLES FALLES PPOTENCIALS: SITUACIONS QUE PODRIEN FER FALLAR EL PROGRAMA
    test('Will try to supply Employee idetinfied by id=5 but it will fail', async () => {
      let id=5;
      getEmployee(id).catch( (reject) => {
          expect(reject).toBe('ERROR! Non existing Employee');
      } )
    });
    test('Will try to supply Employee idetinfied by id=5 but it will fail', async () => {
      let id=-1;
      getEmployee(id).catch( (reject) => {
          expect(reject).toBe('ERROR! Non existing Employee');
      } )
    });
    test('Will try to supply Employee idetinfied by id=x but it will fail', async () => {
      let id='x';
      getEmployee(id).catch( (reject) => {
          expect(reject).toBe('ERROR! Non existing Employee');
      })
    });
    test('Will try to supply Employee idetinfied by id=hola but it will fail', async () => {
      let id='hola';
      getEmployee(id).catch( (reject) => {
          expect(reject).toBe('ERROR! Non existing Employee');
      })
    });
    test('Will try to supply Employee idetinfied by id= but it will fail', async () => {
      let id='';
      getEmployee(id).catch( (reject) => {
          expect(reject).toBe('ERROR! Non existing Employee');
      })
    });
    test('should return ERROR! Non existing Employee, because of an invalid ID = 4', async () => {
      getEmployee().catch((reject) => {
      expect(reject).toBe('ERROR! Non existing Employee');
       });
      });
  
    //SALARIES [4000, 1000, 2000]] 
    //MANERA 1:  Simplify repetitive Jest test cases with test.each 
    const casos2 = [[1,"Linux Torvalds", 4000],[2, "Bill Gates", 1000],[3, "Jeff Bezos", 2000]];
    test.each(casos2)("given %p and %p as arguments, returns %p", 
      async (numID, nameEmployee, expectedSalary) => {
        const emp = await getEmployee(numID);
        const salari = await getSalari(emp);
        expect(salari).toEqual(expectedSalary);
      }
    );
    //MANERA 2: pròpia (molt més simple) un per un (cada salari)
    test('getSalari of employee id=1 found', async () => {
      let id=1;
      const result1 = await getEmployee(id);
      const result2 = await getSalari(result1);
      expect(result1.name).toBe("Linux Torvalds");
      expect(result2).toBe(4000);
    });
    test('getSalari of employee id=2 found', async () => {
      let id=2;
      const result1 = await getEmployee(id);
      const result2 = await getSalari(result1);
      expect(result1.name).toBe("Bill Gates");
      expect(result2).toBe(1000);
    });
    test('getSalari of employee id=3 found', async () => {
      let id=3;
      const result1 = await getEmployee(id);
      const result2 = await getSalari(result1);
      expect(result1.name).toBe("Jeff Bezos");
      expect(result2).toBe(2000);
    });
  
  //TESTS QUE HAN DE DETECTAR POSSIBLES FALLES PPOTENCIALS: SITUACIONS QUE PODRIEN FER FALLAR EL PROGRAMA
  
  // Test for  a non-matching salary corresponding to a given Employee
  test("Promise getSalary reject", () => {
    const emp = {id: 5, name: 'Marlon Brando'};
    return expect(getSalari(emp)).rejects.toStrictEqual("ERROR! Non existing Salary for given Employee");
  })

  // Test for a non object data passed to the function 
  it('should throw an error for an invalid salary', () => {
      const emp = "[ id: 4, name: 'Steve Jobs' ]";
      return expect(getSalari(emp)).rejects.toThrow('La funció NO ha rebut un objecte');
    });

  // Test for an invalid id Employee type 
  it('Will try to supply Employee idetinfied by id=x but it will fail', () => {
      const emp = {id: 'x', name: 'Steve Jobs'};
      return expect(getSalari(emp)).rejects.toStrictEqual('ERROR! Non existing Employee');
    });
