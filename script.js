const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));

document.querySelector("#year").textContent = new Date().getFullYear();

const shareForm = document.querySelector("#share-form");
const feedback = document.querySelector("#form-feedback");
shareForm.addEventListener("submit", event => {
  event.preventDefault();
  feedback.textContent = "Thanks for preparing a message. This preview is not sent or saved anywhere yet. Please wait until Veylora adds a school-approved private sharing channel before entering personal concerns.";
  shareForm.reset();
});
