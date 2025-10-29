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
