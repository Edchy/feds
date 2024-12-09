import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

document.querySelector("button")?.addEventListener("click", () =>
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

