// selecteurs
// document.querySelector("h4").style.background = "green";

// const BaliseHtml = document.querySelector("h4");

// console.log(BaliseHtml);

// BaliseHtml.style.background = "green";

// *****   CLICK-EVENT *********
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const reponse = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click", () => {
  reponse.style.background = "green";
  reponse.classList.add("show-reponse");
});
btn2.addEventListener("click", () => {
  reponse.style.background = "red";
  reponse.classList.add("show-reponse");
});

// ****** Mouse Event ******
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
window.addEventListener("mousedown", () => {});
mousemove.style.transform = "scale(2) translate(-25%, -25%)";

window.addEventListener("mouseup", () => {});
mousemove.style.transform = "scale(1) translate(-50%, -50%)";
mousemove.style.border = "2px solid teal";

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0, 0, 0, 0.6";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(2deg)";
});

// ********* keypress *******

const keypressConatiner = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = () => {
  const audio = new Audio();
  audio.src = "./";
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});

// if ("e.key" === "j") {
//   keypressConatiner.style.background = "pink";
// } else if ("e.key" === "h") {
//   keypressConatiner.style.background = "teal";
// }

// **** scroll ***********
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// ****** fore Event *******
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = ";";
// la commande let est une boite de stockage des donnees remplises dansles input

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML =
      "<h3>pseudo:$(pseudo)<h3>" + "<h4>language preferé:$(language)<h4>";
  } else {
    alert("veuillez acceptez les CGV");
  }
});

// ******** BOM *************
// evenement adossés à window
// confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous trompez?");

  // prompt
  btn1.addEventListener("click", () => {
    let answer = prompt("entrez votre nom!");
    questionContainer.innerHTML += "<h3>bravo!" + answer + "</h3>";
  });
});

// console.log(navigator.userAgent);
// console.log(history);
// console.log(history.back);
// console.log(go - 2);

// setProprety
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
