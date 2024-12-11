import JSConfetti from "js-confetti";
import { todos, createTodoItem } from "./todo";

const html = document.documentElement;
const lightTheme = document.querySelector(".theme-light");
const darkTheme = document.querySelector(".theme-dark");
export const todosList = document.querySelector(".todos-list");
const todosForm = document.querySelector(".todos-form") as HTMLFormElement;

todosForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = todosForm.querySelector("input");
  if (input && input.value.length > 0) {
    createTodoItem(input.value);
    todos.push(input.value);
    console.log(todos);
  }
  todosForm.reset();
});

todos.forEach((todo) => {
  createTodoItem(todo);
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

