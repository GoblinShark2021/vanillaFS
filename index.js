/* eslint-disable no-undef */

//set a variable equal to the body
const body = document.querySelector('body');
//spongebob button
const clickBtn = document.createElement('button');
body.appendChild(clickBtn).innerHTML = 'Change Sponge Size';

//backend testing button
const backendBtn = document.createElement('button');
body.appendChild(backendBtn).innerHTML = 'Backend Tester';

//to do list items
const todoItem = document.createElement('li');
const editBtn = document.createElement('button');
editBtn.innerHTML = '✍️';
const deleteBtn = document.createElement('button');
deleteBtn.innerHTML = '❌';
const completeBtn = document.createElement('button');
completeBtn.innerHTML = '✅';
todoItem.innerHTML = 'testing adding li';
document.getElementById('toDoList').appendChild(todoItem);
todoItem.appendChild(editBtn);
todoItem.appendChild(deleteBtn);
todoItem.appendChild(completeBtn);

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
      const backendDiv = document.createElement('h1');
      console.log(res);
      body.appendChild(backendDiv).innerHTML = `${res.data}`;
    })
    .catch((error) => {
      console.log('error:', error);
    });
}

//event listeners
clickBtn.addEventListener('click', changeSize);
backendBtn.addEventListener('click', beTest);
editBtn.addEventListener('click', console.log('edited'));
deleteBtn.addEventListener('click', console.log('deleted'));
completeBtn.addEventListener('click', console.log('completed'));
