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
    /* checkbox.className = "marked"; */
    checkbox.className = "todo-checkbox";

    if (todo.done) {
    }
    li.addEventListener("click", () => {
      todo.done = !todo.done;
      createHtml(myToDoList);
      localStorage.setItem("ToDo", JSON.stringify(myToDoList));
    });

    const span = document.createElement("span");
    span.class = "text-break";
    span.innerHTML = todo.text;
    if (todo.done) {
      span.classList.add("done");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
    deleteBtn.className = "btn btn-sm btn-outline-warning  ms-3";
    deleteBtn.addEventListener("click", () => {
      // Ta bort just det här elementet
      myToDoList.splice(i, 1);
      localStorage.setItem("ToDo", JSON.stringify(myToDoList));
      createHtml(myToDoList);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    ulElement.appendChild(li);
  });
};
