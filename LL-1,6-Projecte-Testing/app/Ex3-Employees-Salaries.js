//Donats els objectes employees i salaries, crea una arrow function getEmployee()
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.
/*Crea els tests corresponents per verificar el funcionament de les funcions de 
l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).*/
let employees = [
    {
      id: 1, name: 'Linux Torvalds',
    },
    {
      id: 2, name: 'Bill Gates',
    },
    {
      id: 3, name: 'Jeff Bezos',
    },
  ];
  
  let salaries = [
    {
      id: 1, salary: 4000,
    },
    {
      id: 2, salary: 1000,
    },
    {
      id: 3, salary: 2000,
    },
  ];
  
  const getEmployee = (ID) => {
    return new Promise((resolve, reject) => {
      if (typeof ID !== 'number' || !ID) {
        reject('ERROR! Non existing Employee');
      }
      const employee = employees.find((employee) => employee.id == ID);
      if (employee) {
          resolve(employee);
      } else {
        reject('ERROR! Non existing Employee');
      }
    });
  };
 
  const getSalari = (employee) => {
    const ID = employee.id;
    return new Promise((resolve, reject) => {
      if(typeof employee !== "object") throw new Error (`La funció NO ha rebut un objecte`);
      if (typeof ID != 'number'  || !ID) {
        reject('ERROR! Non existing Employee');
      }
      const salari = salaries.find((objSalari) => objSalari.id == ID);
      if (salari) {
        resolve(salari.salary);
      } else {
        reject('ERROR! Non existing Salary for given Employee');
      }
    });
  };

module.exports = {getEmployee, employees, getSalari, salaries};
