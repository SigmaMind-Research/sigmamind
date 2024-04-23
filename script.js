const menuToggle = document.querySelector(".menu__toggle");
const links = document.querySelector(".links");
const sandwitch = document.querySelector(".sandwitch");
const cross = document.querySelector(".cross");

menuToggle.addEventListener("click", function () {
  links.classList.toggle("open");

  menuToggle.classList.toggle("active");
});

// ---------------------------------------------

const dropdown = document.querySelector(".dropdown");
const dropdownM = document.querySelector(".dropdown-menu");

dropdown.addEventListener("click", function () {
  dropdownM.classList.toggle("open");
});
