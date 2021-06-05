const display = document.getElementById('display');
const keyboardButtons = document.querySelectorAll('#keyboard button');
const addOperationBtn = document.querySelector('#operations button');
import './main.css';

const addSpacer = (str, interval) => {
  let result = [];
  for(let i = 0; i < str.length; i += interval) {
    result.push(str.substring(i, i + interval));
  }
  return result.join(' ');
};

display.addEventListener('input', (e) => {
  const trimmed = e.target.value.split(' ').join('');
  e.target.value = addSpacer(trimmed, 4);
});

keyboardButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.outerText;
    
    console.log(value);
  })
});

addOperationBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Add operation!');
});

