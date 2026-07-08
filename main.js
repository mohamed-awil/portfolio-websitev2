const themeBtn = document.getElementById("themeBtn");
const themeicon = themeBtn.querySelector("i");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const mobileMenuIcon = menuBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeicon.classList.remove("fa-moon");
    themeicon.classList.add("fa-sun");
  } else {
    themeicon.classList.remove("fa-sun");
    themeicon.classList.add("fa-moon");
  }
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    mobileMenuIcon.classList.remove("fa-bars");
    mobileMenuIcon.classList.add("fa-xmark");
  } else {
    mobileMenuIcon.classList.remove("fa-xmark");
    mobileMenuIcon.classList.add("fa-bars");
  }
});
