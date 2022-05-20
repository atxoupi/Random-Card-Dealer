/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = barajar();
let boton = document.getElementById("refresh");
boton.addEventListener("click", barajar);

function barajar() {
  //write your code here
  let palo = Math.floor(Math.random() * 4) + 1;
  let carta = document.getElementById("card");
  let head = document.getElementById("paloSup");
  let body = document.getElementById("valor");
  let footer = document.getElementById("paloInf");
  let valor = Math.floor(Math.random() * 12) + 1;

  switch (palo) {
    case 1:
      head.innerHTML = "♦";
      head.style.color = "red";
      if (valor >= 1 && valor <= 9) body.innerHTML = valor;
      else if (valor === 10) body.innerHTML = "J";
      else if (valor === 11) body.innerHTML = "K";
      else if (valor === 12) body.innerHTML = "A";
      footer.style.color = "red";
      footer.innerHTML = "♦";
      break;
    case 2:
      head.innerHTML = "♥";
      head.style.color = "red";
      if (valor >= 1 && valor <= 9) body.innerHTML = valor;
      else if (valor === 10) body.innerHTML = "J";
      else if (valor === 11) body.innerHTML = "K";
      else if (valor === 12) body.innerHTML = "A";
      footer.style.color = "red";
      footer.innerHTML = "♥";
      break;
    case 3:
      head.innerHTML = "♠";
      head.style.color = "black";
      if (valor >= 1 && valor <= 9) body.innerHTML = valor;
      else if (valor === 10) body.innerHTML = "J";
      else if (valor === 11) body.innerHTML = "K";
      else if (valor === 12) body.innerHTML = "A";
      footer.innerHTML = "♠";
      footer.style.color = "black";
      break;
    case 4:
      head.innerHTML = "♣";
      head.style.color = "black";
      if (valor >= 1 && valor <= 9) body.innerHTML = valor;
      else if (valor === 10) body.innerHTML = "J";
      else if (valor === 11) body.innerHTML = "K";
      else if (valor === 12) body.innerHTML = "A";
      footer.innerHTML = "♣";
      footer.style.color = "black";
      break;
  }
}
//♦ ♥ ♠ ♣
