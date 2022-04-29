const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  nav.classList.toggle("active");
});
