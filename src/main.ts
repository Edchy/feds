import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

document
  .querySelector("button")
  ?.addEventListener("click", () => jsConfetti.addConfetti());
