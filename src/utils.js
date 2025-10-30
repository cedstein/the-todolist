export const createHtml = (myToDoList) => {
  const ulElement = document.getElementById("toDoes");
  ulElement.innerHTML = "";

  console.log(myToDoList);
  myToDoList.forEach((todo, i) => {
    console.log(todo);

    const li = document.createElement("li");

    li.className = "toDo";
    li.innerHTML = todo.text;
    li.addEventListener("click", () => {
      myToDoList.splice(i, 1);
      createHtml(myToDoList);
      localStorage.setItem("ToDo", JSON.stringify(myToDoList));
    });

    ulElement.appendChild(li);
  });
};
