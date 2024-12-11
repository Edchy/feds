import { todosList } from "./main";

export let todos = ["git good", "git better", "git best"];

export function createTodoItem(content: string) {
  const LI = document.createElement("li");
  const BTN = document.createElement("button");
  const TEXT = document.createElement("span");
  TEXT.textContent = content;
  BTN.textContent = "X";
  BTN.addEventListener("click", () => {
    LI.remove();
    const index = todos.findIndex((value) => value === content);
    if (index !== -1) {
      todos.splice(index, 1);
    }
    console.log(todos);
  });
  LI.append(TEXT, BTN);
  todosList?.append(LI);
  console.log(todos);
}
