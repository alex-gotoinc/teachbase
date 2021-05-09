const Calc = function () {

  let history = [];

  const methods = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2
  }

  this.operation = (str) => {
    const [num1, operator, num2] = str.split(' ');

    const useMethod = (key, num1, num2) => methods[key](+num1, +num2);

    if (Object.keys(methods).includes(operator)) {

      let result = useMethod(operator, num1, num2);

      if (result) {
        history.push({
          operatortion: operator,
          operands: [num1, num2]
        });

        return useMethod(operator, num1, num2);
      }
    } else {
      console.log('Don\'t have method for this operation -', operator);
      return null;
    }
  }

  this.addOperation = (operator, method) => methods[operator] = method;

  this.clearHistory = () => history = [];

  this.history = () => history;

}
const calculator = new Calc();


calculator.addOperation('/', (a, b) => a / b);
calculator.addOperation('*', (a, b) => a * b);
calculator.operation('31 + 32');
calculator.operation('10 / 2');
calculator.operation('10 * 2');
calculator.operation('10 % 2');

console.log('history - ', calculator.history());
calculator.clearHistory();
console.log('history after cleanHistory() - ', calculator.history());