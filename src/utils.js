export const createHtml = (myToDoList) => {
  const ulElement = document.getElementById("toDoes");
  ulElement.innerHTML = "";

  console.log(myToDoList);
  myToDoList.forEach((todo, i) => {
    console.log(todo);

    const li = document.createElement("li");
    li.className = "toDo";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    if (todo.done) {
    }
    li.addEventListener("click", () => {
      todo.done = !todo.done;
      createHtml(myToDoList);
      localStorage.setItem("ToDo", JSON.stringify(myToDoList));
    });

    const span = document.createElement("span");
    /* span.className = "marked"; */
    span.innerHTML = todo.text;
    if (todo.done) {
      span.className = "done";
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    ulElement.appendChild(li);
  });
};
