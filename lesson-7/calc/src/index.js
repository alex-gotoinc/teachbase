const display = document.getElementById('display');
const keyboardButtons = document.querySelectorAll('#keyboard button');
const addOperationBtn = document.querySelector('#operations button');
import './main.css';

const INITIAL_DISPLAY_VALUE = 0;


const addSpacer = (str, interval) => {
  let result = [];
  for(let i = 0; i < str.length; i += interval) {
    result.push(str.substring(i, i + interval));
  }
  return result.join(' ');
};

window.addEventListener('DOMContentLoaded', () => {
  
  
  display.value = INITIAL_DISPLAY_VALUE;
  
  

  document.addEventListener('keypress', e => {
    const trimmed = e.target.value.split(' ').join('');
    
    // if(trimmed.charAt(0) === '0') {
    //   display.value = trimmed.slice(1).concat(e.key);
    // }
  });

  // display.addEventListener('input', e => {
  //   const regex = new RegExp(/^[-+]?[0-9]+([-+*/]+[-+]?[0-9]+)*$/);
  //
  //   if(regex.test(String(e.target.value).replace(/\s/g, ''))) {
  //     console.log('нормик')
  //   } else {
  //     console.log(':(')
  //   }
  //
  //   const trimmed = e.target.value.split(' ').join('');
  //   e.target.value = addSpacer(trimmed, 4);
  // });

  // keyboardButtons.forEach(button => {
  //   button.addEventListener('click', (event) => {
  //     const value = event.target.outerText;
  //
  //     console.log(value);
  //   })
  // });

  // addOperationBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   console.log('Add operation!');
  // });

});



