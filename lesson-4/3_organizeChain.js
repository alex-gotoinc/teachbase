// prototypes
const humanProto = {
  eat: function () {
    console.log('I eat!');
  },
  sleep: function () {
    console.log('I sleep!');
  },
  callFriend: function () {
    console.log('I call friends!');
  }
}
const employeeProto = {
  writeReport: function () {
    console.log('Employee writes report!');
  },
  organizeMeeting: function () {
    console.log('Employee organizes meeting');
  },
  retire: function () {
    console.log('Employee can retire');
  },
  startVacation: function () {
    console.log('Employee says fuck off and goes to vacation!');
  }
};


// constructors
const Human = function (name, lastName, phoneNumber, location) {
  this.name = name
  this.lastName = lastName
  this.phoneNumber = phoneNumber
  this.location = location
}
const Employee = function (position, baseSalary, salaryCurrency, department, startDate, endDate) {
  this.position = position;
  this.baseSalary = baseSalary;
  this.salaryCurrency = salaryCurrency;
  this.department = department;
  this.startDate = startDate;
  this.endDate = endDate;
}

Human.prototype = humanProto;
Employee.prototype = employeeProto;
Object.setPrototypeOf(employeeProto, humanProto);

const human = new Human('Lelik', 'Ebolik', '228', 'DonbAss');
const employee = new Employee(
  'Водонос',
  '300 bucks',
  'Грывни',
  'Департамент ебанатов-водоносов',
  '10.10.1990',
  '10.10.1991'
);

// test only Human proto 
human.eat();
human.sleep();
human.callFriend();

// test Employee methods with Human methods
employee.writeReport();
employee.organizeMeeting();
employee.retire();
employee.startVacation();
employee.eat();
employee.sleep();
employee.callFriend();


