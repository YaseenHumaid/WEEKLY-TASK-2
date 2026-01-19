let tasks = [];
let filter = "all";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const totalEl = document.getElementById("total");
const completedEl = document.getElementById("completed");

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") {
    errorMsg.classList.remove("d-none");
    return;
  }
  errorMsg.classList.add("d-none");

  tasks.push({ id: Date.now(), text, completed: false });
  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  let filtered = tasks.filter(t =>
    filter === "all" ? true :
    filter === "completed" ? t.completed :
    !t.completed
  );

  filtered.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <input type="checkbox" ${task.completed ? "checked" : ""}
          onchange="toggleComplete(${task.id})">
        <span class="${task.completed ? 'completed' : ''}">
          ${task.text}
        </span>
      </div>
      <div class="actions">
        <button class="edit" onclick="editTask(${task.id})">✏</button>
        <button class="delete" onclick="deleteTask(${task.id})">🗑</button>
      </div>
    `;

    taskList.appendChild(li);
  });

  totalEl.innerText = tasks.length;
  completedEl.innerText = tasks.filter(t => t.completed).length;
}

function toggleComplete(id) {
  tasks.find(t => t.id === id).completed ^= true;
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const text = prompt("Edit task", task.text);
  if (text) task.text = text;
  renderTasks();
}

function filterTasks(type) {
  filter = type;
  renderTasks();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}
