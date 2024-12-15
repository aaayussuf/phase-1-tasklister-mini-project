document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Event listener for form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get task description
    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription.trim() !== "") {
      // Create a new task item
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      // Append the task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      form.reset();
    }
  });
});
