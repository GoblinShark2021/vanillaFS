/* eslint-disable no-undef */
const body = document.querySelector('body');

const colorClick = document.createElement('button');
colorClick.innerHTML = 'Cycle Colors!';
colorClick.setAttribute('id', 'colorBtn');
body.appendChild(colorClick);

const colors = ['blue', 'green', 'yellow', 'purple', 'cyan'];
const yoText = document.getElementById('yo');
let index = 0;

const cycle = () => {
  if(index > colors.length - 1){
    index = 0;
  }
  yoText.style.color = colors[index];
  index++;
  return;
};


document
  .getElementById('colorBtn')
  .addEventListener('click', cycle);
