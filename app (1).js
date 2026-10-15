const path = require("path");
const { addTask, listTasks } = require("./taskManager");
const { saveTasks, loadTasks } = require("./fileHandler");

const filePath = path.join(__dirname, "tasks.json");

// 1. Load existing tasks
const tasks = loadTasks(filePath);
console.log("Loaded tasks:");
listTasks(tasks);

// 2. Add new tasks
addTask(tasks, "buy decorations");
addTask(tasks, "send invitations");

// 3. List all tasks
console.log("\nUpdated tasks:");
listTasks(tasks);

// 4. Save back to the file
saveTasks(filePath, tasks);
console.log("\nTasks saved to", filePath);
