let count = 0;

const btn = document.getElementById("clickBtn");
const counter = document.getElementById("count");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Klikk teller
btn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// Dark mode toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Liten “typing effect” på tittelen
const title = document.getElementById("title");
const text = "Hi 👋";
title.textContent = "";

let i = 0;
function typeEffect() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

typeEffect();
