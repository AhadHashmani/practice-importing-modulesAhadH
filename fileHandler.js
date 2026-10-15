const fs = require("fs");

// Write the tasks array to a file as JSON.
function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Read and parse tasks from a file. Missing file -> empty array.
function loadTasks(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

module.exports = { saveTasks, loadTasks };
