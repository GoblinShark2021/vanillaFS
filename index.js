/* eslint-disable no-undef */

//set a variable equal to the body

const body = document.querySelector("body");
//spongebob button
// const clickBtn = document.createElement("button");
// body.appendChild(clickBtn).innerHTML = "Clear Tasks";

//backend testing button
const loadTasksBtn = document.createElement("button");
body.appendChild(loadTasksBtn).innerHTML = "Load Tasks";

// input submit button
const form = document.getElementById("taskForm");

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
      console.log("the add response", res.data.task);
      const taskName = res.data.task;
    });
}

let taskCount = 0;

function getTasks(e) {
  taskCount++;
  // e.preventDefault();
  axios.get("/api/getAllTasks").then((res) => {
    const dataArr = res.data;
    const taskArray = [];
    dataArr.map((i) => taskArray.push(i.task));
    console.log(taskArray);

    taskArray.forEach((el) => {
      const todoItem = document.createElement("li");
      todoItem.setAttribute("id", `todo${el}`);
      todoItem.innerHTML = `${el}`;

      const toDo = document.getElementById("toDoList");
      toDo.appendChild(todoItem);

      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("id", el);
      deleteBtn.innerHTML = "❌";
      deleteBtn.addEventListener("click", async () => {
        await deleteTask(el);
        document.getElementById(`todo${el}`).remove();
      });

      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = "✅";

      todoItem.appendChild(deleteBtn);
      todoItem.appendChild(completeBtn);
    });
  });
}

function deleteTask(id) {
  axios
    .delete("/api/deleteTask", {
      data: {
        task: id,
      },
    })
    .then((res) => console.log("Successfully Deleted ---> ", res.data));
}

//loadTasksBtn.addEventListener("click", getTasks);

loadTasksBtn.addEventListener("click", () => {
  if (taskCount === 0) {
    getTasks();
  }
});

form.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask(e.target.value);
    getTasks();
  }
});
