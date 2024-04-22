const menuToggle = document.querySelector(".menu__toggle");
const sandwitch = document.querySelector(".sandwitch");
const cross = document.querySelector(".cross");

menuToggle.addEventListener("click", function () {
  const links = document.querySelector(".links");
  links.classList.toggle("open");
  

  sandwitch.classList.toggle("open");
  cross.classList.toggle("open");
});
