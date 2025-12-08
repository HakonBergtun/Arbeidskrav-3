(() => {
  const btn = document.querySelector(".hamburger");
  const menu = document.getElementById("main-menu");
  if (!btn || !menu) return;

  const openMenu = () => {
    btn.setAttribute("aria-expanded", "true");
    menu.classList.add("active");
    menu.removeAttribute("hidden");
  };

  const closeMenu = () => {
    btn.setAttribute("aria-expanded", "false");
    menu.classList.remove("active");
    menu.setAttribute("hidden", "");
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (menu.hasAttribute("hidden")) return;
    if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

if (document.body.contains(document.getElementById("order-form"))) {
  console.log("Jeg lever!");

  const products = [
    { name: "Latte", price: 49 },
    { name: "Cappuccino", price: 46 },
    { name: "Americano", price: 42 },
    { name: "Espresso", price: 35 },
    { name: "Flat White", price: 50 },
  ];

  const order = {
    name: "",
    email: "",
    coffee: "",
    qty: 1,
    table: null,
  };

  const orderForm = document.getElementById("order-form");
  const coffeeSel = document.getElementById("coffee");
  const cupsSel = document.getElementById("cups");
  const qtyMinus = document.querySelector(".qty-minus");
  const qtyPlus = document.querySelector(".qty-plus");
  const qtyValue = document.getElementById("qty-value");
  const totalDisplay = document.getElementById("grand-total");
  const clearBtn = document.getElementById("clear-order");
  const tableBtn = document.getElementById("set-table");
  const tableOutput = document.getElementById("table-output");

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }
  function findPrice(name) {
    const hit = products.find((p) => p.name === name);
    return hit ? hit.price : 0;
  }

  function render() {
    cupsSel.value = String(order.qty);
    qtyValue.textContent = String(order.qty);

    const price = findPrice(order.coffee);
    const total = price * order.qty;
    totalDisplay.textContent = total + " kr";

    tableOutput.textContent = order.table ? "Bordnummer: " + order.table : "";
  }

  order.qty = Number(cupsSel.value);
  order.coffee = coffeeSel.value || "";
  render();

  qtyMinus.addEventListener("click", () => {
    order.qty = clamp(order.qty - 1, 1, 10);
    render();
  });

  qtyPlus.addEventListener("click", () => {
    order.qty = clamp(order.qty + 1, 1, 10);
    render();
  });

  cupsSel.addEventListener("change", () => {
    order.qty = clamp(Number(cupsSel.value), 1, 10);
    render();
  });

  coffeeSel.addEventListener("change", () => {
    order.coffee = coffeeSel.value;
    render();
  });

  clearBtn.addEventListener("click", () => {
    orderForm.reset();
    order.name = "";
    order.email = "";
    order.coffee = "";
    order.qty = 1;
    order.table = null;
    render();
  });

  tableBtn.addEventListener("click", () => {
    const input = prompt("Skriv bordnummer (1–99):");
    if (input === null) return;
    const num = Number(input);
    if (!Number.isInteger(num) || num < 1 || num > 99) {
      alert("Ugyldig bordnummer.");
      return;
    }
    order.table = num;
    render();
  });

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    order.name = document.getElementById("name").value.trim();
    order.email = document.getElementById("email").value.trim();
    order.coffee = coffeeSel.value;
    order.qty = Number(cupsSel.value);

    if (!order.name || !order.email || !order.coffee) {
      alert("Fyll inn navn, e-post og velg kaffe.");
      return;
    }

    const sum = totalDisplay.textContent;
    alert(
      `Takk, ${order.name}! Bestilling: ${order.qty} × ${order.coffee} (${sum}).`
    );

    orderForm.reset();
    order.name = "";
    order.email = "";
    order.coffee = "";
    order.qty = 1;
    order.table = null;
    render();
  });

  console.log("Jeg lever fremdeles!");
}

const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "God morgen! Klar for dagens første kaffe? ☀️";
  } else if (hour < 18) {
    greeting.textContent = "God ettermiddag! En kopp til? ☕";
  } else {
    greeting.textContent = "God kveld! Kaffe før natten? 🌙";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const egg = document.querySelector(".coffee-easter-egg");
  const cup = egg?.querySelector(".coffee-cup");
  const spill = egg?.querySelector(".coffee-spill");

  let clickCount = 0;
  const maxClicks = 7;

  if (cup && spill) {
    cup.addEventListener("click", () => {
      clickCount++;

      if (clickCount === maxClicks) {
        cup.classList.add("broken");

        setTimeout(() => {
          cup.style.display = "none";
          spill.classList.remove("hidden");
        }, 350);
      }
    });

    spill.addEventListener("click", () => {
      spill.classList.add("hidden");

      cup.style.display = "block";
      cup.classList.remove("broken");

      clickCount = 0;
    });
  }
});
console.log("Hvis du ser meg fungerer script.js som forventet!");
