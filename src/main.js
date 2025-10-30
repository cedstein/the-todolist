import "./style.css";
import { ToDo } from "./to-do";
import { createHtml } from "./utils";

// Import our custom CSS
// import "../scss/styles.scss";
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

/* createHtml(toDoes); */
createHtml(myToDoList);
