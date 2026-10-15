// Functions for working with a list of tasks (an array of strings).

function addTask(tasks, task) {
  tasks.push(task);
  return tasks;
}

function listTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks yet.");
    return;
  }
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

module.exports = { addTask, listTasks };
