import "./style.css";
import { ToDo } from "./to-do";
import { createHtml } from "./utils";

// Import our custom CSS
// import "../scss/styles.scss";

const myToDoList = [
  new ToDo("Koda mer"),
  new ToDo("Lära mig mer om Javascript"),
  new ToDo("Lära mig mer om ramverk"),
];

/* let toDoes []; */

/* const toDoesFromLS = localStorage.getItem("ToDo");
if (toDoesFromLs === null) {
  toDoes = myToDoList;
} else {
  toDoes = JSON.parse(toDoesFromLS);
} */

/* createHtml(toDoes); */
createHtml(myToDoList);
