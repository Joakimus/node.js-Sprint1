/*Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() 
i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. 
Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
https://www.linkedin.com/pulse/javascript-promise-json-parse-jun-dolor/  */

const fs = require('fs');

const pathFile = 'app/dades/data.json';

const getEmployee = (ID) => {
    return new Promise((resolve, reject) => {
      if (typeof ID != 'number' || !ID) {
         console.log('El valor del ID ha de ser numèric!!!');
      }else{    
       const dadesJson = fs.readFileSync(`${pathFile}`);
       if (!dadesJson){
          console.log(`Non existing data file ${pathFile}`);
          reject(`Non existing data file ${pathFile}`);
       }else{
            const employees = JSON.parse(dadesJson).employees;
            const employee = employees.find((employee) => employee.id == ID);
            if (employee) {
                  resolve(employee);
                }else {
                  reject('ERROR! Non existing Employee');
                } 
             }
        }
  });
};

const getSalari = (employee) => {
    if(typeof employee !== "object") throw new Error (`La funció NO ha rebut un objecte`);
    const ID = employee.id;
    return new Promise((resolve, reject) => {
      const fitxJson = fs.readFileSync(`${pathFile}`);
      if (!fitxJson){
         console.log("Non existing data file");
      }else{
          const salaries = JSON.parse(fitxJson).salaries;
          const salari = salaries.find((objSalari) => objSalari.id == ID);
          if (salari) {
            resolve(salari.salary);
          } else {
            reject(`ERROR! L\'empleat ${ID} no existeix`);
          }
      }
    });
  };

  const getEmployees = () => {
    const dadesJson = fs.readFileSync(`${pathFile}`);
    if (!dadesJson) {
      console.log(`Non existing data file ${pathFile}`);
      return [];
    } else {
      const employees = JSON.parse(dadesJson).employees;
      return employees;
    }
  };

module.exports = {  getEmployee, getSalari, getEmployees };

