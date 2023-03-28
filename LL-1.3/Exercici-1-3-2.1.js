//Donats els objectes employees i salaries, crea una arrow function getEmployee()
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.
let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = (ID) => {
  return new Promise((resolve, reject) => {
    if (typeof ID != 'number') {
      console.log('El valor del ID ha de ser numèric!!!');
    }
    const employee = employees.find((employee) => employee.id == ID);
    if (employee) {
      resolve(employee);
    } else {
      reject(`ERROR! L\'empleat ${ID} no existeix`);
    }
  });
};
//CRIDES A LA FUNCIÓ-COMPROVACIONS
getEmployee(1)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));
getEmployee(2)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));
getEmployee(3)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));
//Proves errònies
getEmployee(7)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));
getEmployee(0)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));
getEmployee(-1)
  .then((employee) => console.log(employee))
  .catch((error) => console.log(error));

const getSalari = (employee) => {
  const ID = employee.id;
  return new Promise((resolve, reject) => {
    if (typeof ID != 'number') {
      console.log('El valor del ID ha de ser numèric!!!');
    }
    const salari = salaries.find((objSalari) => objSalari.id == ID);
    if (salari) {
      resolve(salari);
    } else {
      reject(`ERROR! L\'empleat ${ID} no existeix'}`);
    }
  });
};

getEmployee(1)
.then((employee) =>  getSalari(employee).then((SalaryObj) => console.log(`${employee.name} té salari de: ${SalaryObj.salary}`))
.catch((error) => console.log(error)));
getEmployee(2).then((employee) =>
  getSalari(employee).then((SalaryObj) => console.log(`${employee.name} té salari de: ${SalaryObj.salary}`))
  .catch((error) => console.log(error)));
getEmployee(3).then((employee) =>
  getSalari(employee).then((SalaryObj) => console.log(`${employee.name} té salari de: ${SalaryObj.salary}`))
  .catch((error) => console.log(error)));
//Proves errònies:
getEmployee(7)
.then((employee) => getSalari(employee)
.then((SalaryObj) => console.log(`${employee.name} té salari de: ${SalaryObj.salary}`)))
.catch((error) => console.log(error));

getEmployee(0)
.then((employee) => getSalari(employee)
.then((SalaryObj) => console.log(`${employee.name} té salari de: ${SalaryObj.salary}`)))
.catch((error) => console.log(error));

