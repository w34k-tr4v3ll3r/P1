// =========================
// SELECT ELEMENTS
// =========================

const primaryButton =
  document.querySelector(".btn--primary");

const secondaryButton =
  document.querySelector(".btn--secondary");

const glassCard =
  document.querySelector(".glass-card");

// =========================
// PRIMARY BUTTON CLICK
// =========================

primaryButton.addEventListener("click", () => {

  alert("Welcome to Frontend Development!");

});

// =========================
// SECONDARY BUTTON CLICK
// =========================

secondaryButton.addEventListener("click", () => {

  glassCard.classList.toggle("active-card");

});

// =========================
// CARD HOVER EFFECT
// =========================

glassCard.addEventListener("mouseenter", () => {

  glassCard.style.transform =
    "translateY(-10px) scale(1.02)";

});

glassCard.addEventListener("mouseleave", () => {

  glassCard.style.transform =
    "translateY(0px) scale(1)";

});