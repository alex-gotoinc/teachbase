const employees = [
  {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 54,
    salary: 10000,
    position: 'Architect'
  },
  {
    firstName: 'Gustav',
    lastName: 'Andersen',
    age: 31,
    salary: 5000,
    position: 'Software engineer'
  },
  {
    firstName: 'Liz',
    lastName: 'Taylor',
    age: 20,
    salary: 7000,
    position: 'Manager'
  }
];

const getAverageSalary = () => {
  const totalSalary = employees.reduce((acc, employer) => employer.salary + acc, 0);
  return totalSalary / employees.length;
}
console.log('getAverageSalary', getAverageSalary());

const getSortedSalaryArr = () => employees.sort((employer1, employer2) => employer1.salary - employer2.salary);
console.log('getSortedSalaryArr', getSortedSalaryArr());

const getFilteredList = () => employees.filter((employer) => employer.salary > 4500 && employer.age > 25);
console.log('getFilteredList', getFilteredList());

