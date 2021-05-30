const display = document.getElementById('display');
const addOperationBtn = document.getElementById('addOperation');
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

addOperationBtn.addEventListener('click', () => {
  console.log('click!');
});

