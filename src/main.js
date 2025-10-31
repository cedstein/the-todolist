import "./style.css";
import { ToDo } from "./to-do";
import { createHtml } from "./utils";

const handleSubmit = (e) => {
  e.preventDefault();
  const text = document.getElementById("to-do").value;
  const newToDo = new ToDo(text);
  myToDoList.push(newToDo);
  createHtml(myToDoList);
  localStorage.setItem("ToDo", JSON.stringify(myToDoList));
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

    // Rita om listan och spara
    createHtml(myToDoList);
    localStorage.setItem("ToDo", JSON.stringify(myToDoList));
  });
}
