/* eslint-disable no-undef */
//set a variable equal to the body
const body = document.querySelector('body');
const clickBtn = document.createElement('button');
const dataTable = [];

body.appendChild(clickBtn).innerHTML = 'Change Sponge Size';

let numberOfClicks = 0;

function changeSize(i) {
  console.log('spongebob has shrunk');
  document.getElementById('spongebob').style.height = `${
    Math.random() * 1000
  }px`;
  dataTable.push(numberOfClicks);
  console.log(dataTable);
  numberOfClicks++;
  const newh1 = document.createElement('h1');
  body.appendChild(newh1).innerHTML = `${numberOfClicks}`;
}

clickBtn.addEventListener('click', changeSize);
