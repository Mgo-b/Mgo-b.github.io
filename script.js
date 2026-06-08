const roles = ["Développeur front-end", "Designer d'interfaces", "Architecte UI/UX", "Créateur d'expériences" ];
const typedRole = document.getElementById("typed-role");
const yearElement = document.getElementById("year");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function updateYear() {
  yearElement.textContent = new Date().getFullYear();
}

function typeLoop() {
  const currentRole = roles[roleIndex];
  const visibleText = currentRole.slice(0, charIndex);
  typedRole.textContent = visibleText;

  if (!isDeleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeLoop, 90);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeLoop, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1400);
    } else {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeLoop, 400);
    }
  }
}

function initMenu() {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    const expanded = navMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", expanded);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

function init() {
  updateYear();
  typeLoop();
  initMenu();
}

window.addEventListener("DOMContentLoaded", init);
