/* eslint-disable no-undef */

//set a variable equal to the body
const body = document.querySelector('body');
//spongebob button
const clickBtn = document.createElement('button');
body.appendChild(clickBtn).innerHTML = 'Change Sponge Size';

//backend testing button
const backendBtn = document.createElement('button');
body.appendChild(backendBtn).innerHTML = 'Backend Tester';

//functions for our scripts
function changeSize(i) {
  console.log('spongebob has shrunk');
  document.getElementById('spongebob').style.height = `${
    Math.random() * 1000
  }px`;
}

function beTest() {
  axios
    .get('/test')
    .then((res) => {
      console.log('talkin 2 tha back', res.data);
    })
    .catch((error) => {
      console.log('error:', error);
    });
}

//event listeners
clickBtn.addEventListener('click', changeSize);
backendBtn.addEventListener('click', beTest);
