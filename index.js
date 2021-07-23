/* eslint-disable no-undef */

//set a variable equal to the body

const body = document.querySelector("body");
//spongebob button
const clickBtn = document.createElement("button");
body.appendChild(clickBtn).innerHTML = "Change Sponge Size";

//backend testing button
const backendBtn = document.createElement("button");
body.appendChild(backendBtn).innerHTML = "Load Tasks";

// input submit button
const form = document.getElementById("taskForm");

//to do list items
// const todoItem = document.createElement("li");
// const editBtn = document.createElement("button");
// editBtn.innerHTML = "✍️";
// const deleteBtn = document.createElement("button");
// deleteBtn.innerHTML = "❌";
// const completeBtn = document.createElement("button");
// completeBtn.innerHTML = "✅";
// document.getElementById("toDoList").appendChild(todoItem);
// todoItem.appendChild(editBtn);
// todoItem.appendChild(deleteBtn);
// todoItem.appendChild(completeBtn);

//functions for our scripts
function changeSize(i) {
  console.log("spongebob has shrunk");
  document.getElementById("spongebob").style.height = `${
    Math.random() * 1000
  }px`;
}

function beTest() {
  axios
    .get("/test")
    .then((res) => {
      console.log("talkin 2 tha back", res.data);
      const backendDiv = document.createElement("h1");
      console.log(res);
      body.appendChild(backendDiv).innerHTML = `${res.data}`;
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

function addTask(e) {
  console.log("post called");
  axios
    .post("/api/createTask", {
      data: {
        task: document.getElementById("taskForm").value,
      },
    })
    .then((res) => {
      console.log("the response", res);
    });
}

function getTasks(e) {
  e.preventDefault();
  axios.get("/api/getAllTasks").then((res) => {
    const dataArr = res.data;
    const taskArray = [];
    dataArr.map((i) => taskArray.push(i.task));
    console.log(taskArray);
    //erics scheme
    taskArray.forEach((el) => {
      //BUTTONS

      // TODO ITEMS
      const todoItem = document.createElement("li");
      todoItem.setAttribute("id", `todo${el}`);
      todoItem.innerHTML = `${el}`;

      // APPENDING TO DOCUMENT ID - TODOLIST
      const toDo = document.getElementById("toDoList");
      toDo.appendChild(todoItem);

      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("id", el);
      deleteBtn.innerHTML = "❌";
      deleteBtn.addEventListener("click", () => {
        document.getElementById(`todo${el}`).remove();
        deleteTask(el);
      });

      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = "✅";

      todoItem.appendChild(deleteBtn);
      todoItem.appendChild(completeBtn);
    });
    //end of erics scheme
  });
}

function deleteTask(id) {
  console.log("in the delete function", `Element is ${id}`);

  axios
    .delete("/api/deleteTask", {
      data: {
        task: id,
      },
    })
    .then((res) => console.log("you deleted some shit."));
}

//console.log("this is the task ", res.data[0].task);

//event listeners
clickBtn.addEventListener("click", changeSize);
backendBtn.addEventListener("click", getTasks);
// editBtn.addEventListener("click", console.log("edited"));

//completeBtn.addEventListener("click", console.log("completed"));

form.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(e.target.value);
    // getTasks();
  }
});
