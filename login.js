const body = document.querySelector("body");
const userForm = document.getElementById("username");
const pwForm = document.getElementById("password");

function loginUser(e) {
  //   console.log("username:" + userForm.value);
  axios
    .post("/login.html", {
      data: {
        username: userForm.value,
        password: pwForm.value,
      },
    })
    .then((res) => console.log(res.data));
  // .then((res) => res.redirect("/"));
}
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", loginUser);
