if (document.body.contains(document.getElementById("order-form"))) {
  // kun bestilling side js
  console.log("Jeg lever!");

  const orderForm = document.getElementById("order-form");
  const plusButtons = document.querySelectorAll(".qty-plus");
  const minusButtons = document.querySelectorAll(".qty-minus");
  const totalDisplay = document.getElementById("grand-total");
  const clearBtn = document.getElementById("clear-order");
  const tableBtn = document.getElementById("set-table");
  const tableOutput = document.getElementById("table-output");
}
// greeting på index
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "God morgen! Klar for dagens første kaffe? ☀️";
} else if (hour < 18) {
  greeting.textContent = "God ettermiddag! En kopp til? ☕";
} else {
  greeting.textContent = "God kveld! Kaffe før natten? 🌙";
} 