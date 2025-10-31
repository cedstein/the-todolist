import "./style.css";
import { ToDo } from "./to-do";
import { createHtml } from "./utils";

const handleSubmit = (e) => {
  /* sparar den dolda texten för eget syfte*/

  /*  e.preventDefault();
  const text = document.getElementById("to-do").value;
  const newToDo = new ToDo(text);
  myToDoList.push(newToDo);
  createHtml(myToDoList);
  localStorage.setItem("ToDo", JSON.stringify(myToDoList)); */

  e.preventDefault();
  const input = document.getElementById("to-do");
  const text = input.value.trim();

  if (text === "") return;

  const newToDo = new ToDo(text);
  myToDoList.push(newToDo);
  createHtml(myToDoList);
  localStorage.setItem("ToDo", JSON.stringify(myToDoList));

  input.value = "";
};

let myToDoList = [];

const form = document.getElementById("toDoForm");
if (form !== null) {
  form.addEventListener("submit", handleSubmit);
}

const toDoFromLS = localStorage.getItem("ToDo");
if (!toDoFromLS) {
  myToDoList = [
    new ToDo("Koda mer"),
    new ToDo("Lära mig mer om Javascript"),
    new ToDo("Lära mig mer om ramverk"),
  ];
} else {
  myToDoList = JSON.parse(toDoFromLS);
}

createHtml(myToDoList);

// done / undone
const sortDoneBtn = document.getElementById("sortBtn");

if (sortDoneBtn) {
  sortDoneBtn.addEventListener("click", () => {
    myToDoList.sort((b, a) => a.done - b.done);

    createHtml(myToDoList);
    localStorage.setItem("ToDo", JSON.stringify(myToDoList));
  });
}
