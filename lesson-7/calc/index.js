class Calculator {

    constructor(
      previousOperandTextElement,
      currentOperandTextElement,
      addOperationInputElement
     ) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.addOperationInputElement = addOperationInputElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    clearInput() {
      this.addOperationInputElement.value = '';
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
      if(number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
      if(this.currentOperand === '') return
      if(this.previousOperand !== '') {
        this.compute();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
    }

    compute() {
      let computation;
      const prev = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);
      if(isNaN(prev) || isNaN(current)) return; 

      switch(this.operation) {
        case '+':
          computation = prev + current;
          break;
        case '-':
          computation = prev - current;
          break;
        case '*':
          computation = prev * current;
          break;
        case '÷':
          computation = prev / current;
          break;
        default: return; 
      }

      this.currentOperand = computation;
      this.operation = undefined;
      this.previousOperand = '';
    }

    static getDisplayNumber(number) {
      const stringNumber = number.toString();
      const integerDigits = parseFloat(stringNumber.split('.')[0]);
      const decimalDigits = stringNumber.split('.')[1];

      let integerDisplay;
      if(isNaN(integerDigits)) {
        integerDisplay = '';
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
          maximumFractionDigits: 0
        })
      }

      if(decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else return integerDisplay;
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
          Calculator.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
          this.previousOperandTextElement.innerText = 
            `${Calculator.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
          this.previousOperandTextElement.innerText = '';
        }
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const addOperationInputElement = document.querySelector('[data-add-operation]');

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement,
  addOperationInputElement
);

const callbacks = {
  numbers: button => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  },
  operations: button => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  },
  equal: () => {
    calculator.compute();
    calculator.updateDisplay();
  },
  allClear: () => {
    calculator.clear();
    calculator.updateDisplay();
  },
  delete: () => {
    calculator.delete();
    calculator.updateDisplay();
  },
  addOperation: () => {
    calculator.clearInput();
  }
};

numberButtons.forEach(button => button.addEventListener('click', () => callbacks.numbers(button)));
operationsButtons.forEach(button => button.addEventListener('click', () => callbacks.operations(button)));
equalsButton.addEventListener('click',  () => callbacks.equal());
allClearButton.addEventListener('click', () => callbacks.allClear());
deleteButton.addEventListener('click', () => callbacks.delete());

document.addEventListener('keydown', event => {
  const code = event.code;

  if (document.activeElement === addOperationInputElement) {
    switch (code) {
      case 'Enter':
        callbacks.addOperation();
        break;
      default: return;
    }
  } else {
    event.preventDefault();
    switch (code) {
      case 'Backspace':
        callbacks.delete();
        break;
      case 'Enter':
        callbacks.equal();
        break;
      default: return;
    }
  }

});