document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("create-task-form");
  
    form.addEventListener("submit", function(event) {
      // Prevent default form submission behavior
      event.preventDefault();
  
      // Get the value entered by the user
      const taskDescription = document.getElementById("new-task-description").value;
  
      // Create a new list item element
      const taskItem = document.createElement("li");
  
      // Set the text content of the list item
      taskItem.textContent = taskDescription;
  
      // Append the new list item to the task list
      const taskList = document.getElementById("tasks");
      taskList.appendChild(taskItem);
  
      // Clear the input field
      document.getElementById("new-task-description").value = "";
    });
  });
  
});
