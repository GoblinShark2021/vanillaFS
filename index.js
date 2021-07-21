let body = document.querySelector("body");

const colorClick = document.createElement("button");
colorClick.innerHTML = "Cycle Colors!";
colorClick.setAttribute("id", "colorBtn");
body.appendChild(colorClick);

const colors = ["blue", "green", "yellow", "purple", "cyan"];

let yoText = document.getElementById("yo");

const cycle = () => {
  let currentColor = 0;
  return (changeColor = yoText.style.color = "blue");
};

document.getElementById("colorBtn").addEventListener("click", cycle);
