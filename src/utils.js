/* export const createHtml = (toDoes) => {
  const ulElement = document.getElementById("toDoes");
  const li = document.createElement("li");

  li.innerHTML = toDoes.li;

  ulElement.appendChild.apply("li");

  for (let i = 0; < myToDoList.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = myToDoList[i];
    ulElement.appendChild(li);
    
 }
};

createHtml("toDoes"); */

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
    });

    ulElement.appendChild(li);
  });
};
