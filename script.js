/* ========== HEADER: hamburger (på alle sider) ========== */
(() => {
  const btn = document.querySelector(".hamburger");
  const menu = document.getElementById("main-menu");
  if (!btn || !menu) return; // safe-guard

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
  // kun bestilling side js
  console.log("Jeg lever!");

  const orderForm = document.getElementById("order-form");
  const plusButtons = document.querySelectorAll(".qty-plus");
  const minusButtons = document.querySelectorAll(".qty-minus");
  const totalDisplay = document.getElementById("grand-total");
  const clearBtn = document.getElementById("clear-order");
  const tableBtn = document.getElementById("set-table");
  const tableOutput = document.getElementById("table-output");

  // TODO: legg inn din order-logikk her (counter, total, tøm, bordnummer, osv)
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
