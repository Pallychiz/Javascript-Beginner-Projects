const form = document.querySelector(".form");
const input = document.querySelector(".input");
const listEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem('list'));

list.forEach(task => {
    toDoList(task);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    toDoList();
})

function toDoList(task) {
    let newTask = input.value;

    if (task) {
        newTask = task.name;
    }

    const li = document.createElement('li');

    if (task && task.checked) {
        li.classList.add('checked');
    }

    li.innerText = newTask;
    listEl.appendChild(li);
    input.value = '';

    const checkBtn = document.createElement('div');
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    li.appendChild(checkBtn);
    
    const deleteBtn = document.createElement('div');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    li.appendChild(deleteBtn);

    checkBtn.addEventListener('click', () => {
        li.classList.toggle('checked');
        updateLocaleStorage();
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
        updateLocaleStorage();
    })

    updateLocaleStorage();
}

function updateLocaleStorage() {
    const lis = document.querySelectorAll('li');
    list = [];
    lis.forEach(li => {
        list.push({
            name: li.innerText,
            checked: li.classList.contains('checked'),
        })
    })
    localStorage.setItem('list', JSON.stringify(list))
}