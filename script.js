/**
 * Initial list of tasks.
 * Each task has an ID, title, description, and status.
 */
const tasks = [
  { id: 1, title: "Launch Epic Career 🚀", description: "Start building your future", status: "todo" },
  { id: 2, title: "Conquer React 🧩", description: "Master React concepts", status: "todo" },
  { id: 3, title: "Understand Databases 🧠", description: "Learn MongoDB & SQL", status: "todo" },
  { id: 4, title: "Crush Frameworks 🧱", description: "Tackle Angular, Vue, etc.", status: "todo" },
  { id: 5, title: "Master JavaScript 💛", description: "Become fluent in JS", status: "doing" },
  { id: 6, title: "Never Give Up 🏆", description: "Keep grinding", status: "doing" },
  { id: 7, title: "Explore ES6 Features 🚀", description: "Learn new syntax", status: "done" },
  { id: 8, title: "Have fun 🤩", description: "Stay creative and inspired", status: "done" },
];

/**
 * Renders all tasks into their appropriate columns.
 */
function renderTasks() {
  clearColumns();
  tasks.forEach(task => {
    const taskEl = document.createElement("div");
    taskEl.className = "task bg-gray-100 p-3 rounded shadow mb-3 cursor-pointer";
    taskEl.textContent = task.title;
    taskEl.addEventListener("click", () => openModal(task));
    document.getElementById(task.status).appendChild(taskEl);
  });
}

/**
 * Clears all tasks from each board column.
 */
function clearColumns() {
  ["todo", "doing", "done"].forEach(id => {
    const col = document.getElementById(id);
    col.querySelectorAll(".task").forEach(task => task.remove());
  });
}

/**
 * Opens the task editing modal.
 * @param {Object} task - The task to edit.
 */
function openModal(task) {
  document.getElementById("modal").classList.add("active");
  document.getElementById("modal-title").value = task.title;
  document.getElementById("modal-desc").value = task.description;
  document.getElementById("modal-status").value = task.status;

  // Save edited task
  document.getElementById("save-btn").onclick = () => {
    task.title = document.getElementById("modal-title").value;
    task.description = document.getElementById("modal-desc").value;
    task.status = document.getElementById("modal-status").value;
    closeModal();
    renderTasks();
  };
}

/**
 * Closes the task editing modal.
 */
function closeModal() {
  document.getElementById("modal").classList.remove("active");
}

/**
 * Initializes event listeners and renders tasks on load.
 */
window.onload = () => {
  document.getElementById("close-btn").addEventListener("click", closeModal);
  renderTasks();
};
