const input = document.querySelector("#todo-input");
const button = document.querySelector("#todo-button");
const list = document.querySelector("#todo-list");

button.addEventListener("click",() => {
    const todo = input.value;
    
    const li = document.createElement("li");
    li.textContent = todo;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "削除";
    
    deletebutton.addEventListener("click",() => {
        li.remove();
    });

    list.appendChild(li);
    li.appendChild(deletebutton);
})