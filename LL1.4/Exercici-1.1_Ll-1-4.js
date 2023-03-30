//Sprint1 - Lliurament 1.4
// Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, 
//usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.
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

const asyncgetEmployee = (ID) => {
  return  new Promise((resolve, reject) => {
    if (typeof ID !== 'number') {
      console.log('El valor del ID ha de ser numèric!!!');
    }
    const employee = employees.find((employee) => employee.id == ID);
    if(employee) {
      resolve(employee);
    } else  {
      reject(`ERROR! L\'empleat ${ID} no existeix`);
    }
  });
};

const asyncGetSalari = (employee) => {
  const ID = employee.id;
  return new Promise((resolve, reject) => {
    if (typeof ID !== 'number') {
      console.log('El valor del ID ha de ser numèric!!!');
    }
    const salari = salaries.find((objSalari) => objSalari.id == ID);
    if (salari) {
      resolve(salari);
    } else {
      reject(`ERROR! L\'empleat ${ID} no existeix`);
    }
  });
};

async function asyncCall(num) {
  const result1 = await asyncgetEmployee(num);
  const result2 = await asyncGetSalari(result1);
  if ( result1 && result2){
    console.log('Employee  => ' + result1.name, 'Salary  => ' +result2.salary);
  }else{
      console.log("No existeix l'empleat o el Salari");
  }
  
}
employees.forEach(function (arrayItem) {
  asyncCall(arrayItem.id);
});
