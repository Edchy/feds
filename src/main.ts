import JSConfetti from "js-confetti";
import { todos } from "./todo";

const html = document.documentElement;
const lightTheme = document.querySelector(".theme-light");
const darkTheme = document.querySelector(".theme-dark");
const todosList = document.querySelector(".todos-list");
const todosForm = document.querySelector(".todos-form") as HTMLFormElement;

todosForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  let newLi = document.createElement("li");
  const input = todosForm.querySelector("input");
  if (input) {
    newLi.textContent = input.value;
  }
  todosList?.append(newLi);
  todosForm.reset();
});

todos.forEach((todo) => {
  let li = document.createElement("li");
  li.textContent = todo;
  todosList?.append(li);
});

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

const emoji = ["🐶", "🐱", "🦊", "🐼", "🦁"];
let currentEmojiIndex = 0;

document.getElementById("press")?.addEventListener("click", () => {
  const fyrkantDiv = document.getElementById("fyrkant");
  if (fyrkantDiv) {
    currentEmojiIndex = (currentEmojiIndex + 1) % emoji.length;
    fyrkantDiv.textContent = emoji[currentEmojiIndex];
  }
});
