import JSConfetti from "js-confetti";

const html = document.documentElement;
const lightTheme = document.querySelector(".theme-light");
const darkTheme = document.querySelector(".theme-dark");

lightTheme?.addEventListener("click", () => {
  html.style.setProperty("color-scheme", "light");
});
darkTheme?.addEventListener("click", () => {
  html.style.setProperty("color-scheme", "dark");
});

const jsConfetti = new JSConfetti();

document.querySelector(".skull-btn")?.addEventListener("click", () =>
  jsConfetti.addConfetti({
    emojis: ["☠️"],
    confettiRadius: 6,
    confettiNumber: 500,
  })
);
