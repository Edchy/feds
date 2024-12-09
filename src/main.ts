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

const emoji = ['🐶', '🐱', '🦊', '🐼', '🦁'];
let currentEmojiIndex = 0; 

document.getElementById("press")?.addEventListener("click", () => {
    const fyrkantDiv = document.getElementById('fyrkant');
    if (fyrkantDiv) {
        currentEmojiIndex = (currentEmojiIndex + 1) % emoji.length; 
        fyrkantDiv.textContent = emoji[currentEmojiIndex]; 
    }
});

