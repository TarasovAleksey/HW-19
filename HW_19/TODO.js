addItem.onclick = createItem;
item.onkeyup = function(e) {
    if (e.key === "Enter") {
        createItem();
    }
}

function createItem() {
    const text = item.value.trim();

    if (text) {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(text));

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);

    }
    item.value = "";
}