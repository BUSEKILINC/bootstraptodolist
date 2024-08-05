// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const addBtn = document.getElementById('addBtn');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

        const todoSpan = document.createElement('span');
        todoSpan.innerText = todoText;

        const btnGroup = document.createElement('div');
        
        const editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm mr-2';
        editBtn.innerText = 'Düzenle';
        editBtn.addEventListener('click', () => {
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'form-control';
            editInput.value = todoSpan.innerText;
            listItem.insertBefore(editInput, btnGroup);
            todoSpan.style.display = 'none';
            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline-block';

            saveBtn.addEventListener('click', () => {
                todoSpan.innerText = editInput.value;
                listItem.removeChild(editInput);
                todoSpan.style.display = 'inline';
                editBtn.style.display = 'inline-block';
                saveBtn.style.display = 'none';
            });
        });

        const saveBtn = document.createElement('button');
        saveBtn.className = 'btn btn-success btn-sm mr-2';
        saveBtn.innerText = 'Kaydet';
        saveBtn.style.display = 'none';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.innerText = 'Sil';
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        btnGroup.appendChild(editBtn);
        btnGroup.appendChild(saveBtn);
        btnGroup.appendChild(deleteBtn);
        
        listItem.appendChild(todoSpan);
        listItem.appendChild(btnGroup);

        todoList.appendChild(listItem);

        todoInput.value = '';
    }
});
