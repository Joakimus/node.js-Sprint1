const { getEmployee, getSalari, getEmployees } = require("../app/Exer1-N3");

const myModule = require('../app/Exer1-N3');
const fs = require('fs');


//Salaries mocked data
const salariMockData = {
  "salaries": [
    {
      "id": 1, "salary": 4000,
    },
    {
      "id": 2, "salary": 1000,
    },
    {
      "id": 3, "salary": 2000,
    }
  ]
};
//SALARIES
describe('getSalari() tests', () => {
  
  test('should return the correct salary for its employee when given a valid ID=1', async () => {  
    const employeeID = 1;
    const salary = 4000;
    const data = JSON.stringify(salariMockData);
    const employee = await myModule.getEmployee(employeeID);
    expect(employee).toEqual({ "id": 1, "name": "Linux Torvalds" });
    const salari = await myModule.getSalari(employee);
    expect(salari).toEqual(salary);
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
   });
   //Valid Employee ID, but invalid (non existing) data file
  test('should throw an error if the data file does not exist', async () => {
    const employeeID = 2;
    const error = 'Non existing data file app/dades/data.json';
    fs.readFileSync.mockReturnValueOnce(null);
    await expect(myModule.getEmployee(employeeID)).rejects.toMatch('Non existing data file app/dades/data.json');
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });
});

// mock data file

describe('getEmployee()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
const mockedData = fs.readFileSync.mockReturnValue(`{
  "employees": [
    {
      "id": 1,
      "name": "Linux Torvalds"
    },
    {
      "id": 2,
      "name": "Bill Gates"
    },
    {
      "id": 3,
      "name": "Jeff Bezos"
    }
  ], 
  "salaries": [{
    "id": 1,
    "salary": 4000
},
{
    "id": 2,
    "salary": 1000
},
{
    "id": 3,
    "salary": 2000
}
]
}`);

  it('should return the employee with the given ID = 1 ', async () => {  
    const employee = await myModule.getEmployee(1);
    expect(employee).toEqual({ id: 1, name: 'Linux Torvalds' });
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });
 
  test('should reject if the ID is not a number', async () => {
    getEmployee('foo').catch((reject) => {
      expect(reject).toBe('ERROR! Non existing Employee');
      expect(fs.readFileSync).not.toHaveBeenCalled();
      });
    });
 
  it('should reject if the data file is not found', async () => {
    fs.readFileSync.mockReturnValue(null);
    await expect(myModule.getEmployee(1)).rejects.toMatch('Non existing data file app/dades/data.json');
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });
  it('should reject if the employee with the given ID is not found', async () => {
    fs.readFileSync.mockReturnValue(`{
      "employees": [
        {
          "id": 1,
          "name": "Linux Torvalds"
        },
        {
          "id": 2,
          "name": "Bill Gates"
        },
        {
          "id": 3,
          "name": "Jeff Bezos"
        }
      ]
    }`);
    await expect(myModule.getEmployee(4)).rejects.toMatch('ERROR! Non existing Employee');
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });
 
});

jest.mock('fs', () => ({
  readFileSync: jest.fn(() => JSON.stringify(mockedData))
}));

//EMPLOYEES TESTING
describe('getEmployee', () => {
  it('should return the correct employee when given a valid ID=1', async () => {  
    const employee = await getEmployee(1);
    expect(employee).toEqual({ "id": 1, "name": "Linux Torvalds" });
   });
  it('should return the correct employee when given a valid ID=2', async () => {
    const employee = await getEmployee(2);
    expect(employee).toEqual({ "id": 2, "name": "Bill Gates" });
  });
  it('should return the correct employee when given a valid ID=3', async () => {
    const employee = await getEmployee(3);
    expect(employee).toEqual({ "id": 3, "name": "Jeff Bezos" });
  });
  //POTENCIALS POSSIBLES ERRORS (PROGRAM FAILS) 
  test('should return ERROR! Non existing Employee, because of an invalid ID = 4', async () => {
    const invalidId = 4;
      getEmployee(invalidId).catch((reject) => {
            expect(reject).toBe('ERROR! Non existing Employee');
     });
    });
  test('should return ERROR! Non existing Employee, because of an invalid ID = -4', async () => {
      const invalidId = -4;
      getEmployee(invalidId).catch((reject) => {
              expect(reject).toBe('ERROR! Non existing Employee');
       });
      });
  test('should return ERROR! Non existing Employee, because of an invalid ID = ', async () => {
      const invalidId = '';
      getEmployee(invalidId).catch((reject) => {
                expect(reject).toBe('ERROR! Non existing Employee');
         });
        });
  test('should return ERROR! Non existing Employee, because of an invalid ID = x', async () => {
      const invalidId = 'x';
      getEmployee(invalidId).catch((reject) => {
      expect(reject).toBe('ERROR! Non existing Employee');
      });
    });
  test('should return ERROR! Non existing Employee, because of an invalid ID = 4', async () => {
      getEmployee().catch((reject) => {
      expect(reject).toBe('ERROR! Non existing Employee');
       });
      });

  it('should reject if the data file is not found', async () => {
      fs.readFileSync.mockReturnValue(null);
      await expect(myModule.getEmployee(1)).rejects.toMatch('Non existing data file app/dades/data.json');
      });
});

//EMPLOYEES = COMPROVACIÓ DE QUE L'OBJECTE COL·LECCIÓ EMPLOYEES EXISTEIX I DE QUINES SÓN LES DADES 
describe('getEmployees()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return an array of all employees', () => {
    fs.readFileSync.mockReturnValue(`{
      "employees": [
        {
          "id": 1,
          "name": "Linux Torvalds"
        },
        {
          "id": 2,
          "name": "Bill Gates"
        },
        {
          "id": 3,
          "name": "Jeff Bezos"
        }
      ]
    }`);
    const employees = myModule.getEmployees();
    expect(employees).toEqual([
      { id: 1, name: 'Linux Torvalds' },
      { id: 2, name: 'Bill Gates' },
      { id: 3, name: 'Jeff Bezos' },
    ]);
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });

  it('should return an empty array if the data file is not found', () => {
    fs.readFileSync.mockReturnValue(null);
    const employees = myModule.getEmployees();
    expect(employees).toEqual([]);
    expect(fs.readFileSync).toHaveBeenCalledWith('app/dades/data.json');
  });
});

//jest.mock('fs');
