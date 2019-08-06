const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");

const app = express();
const PORT = process.env.port || 3000;

app.use(express.json());

app.post("/tasks", (request, response) => {
  const newTask = new Task(request.body);

  newTask
    .save()
    .then(result => response.status(201).send(result))
    .catch(error => response.status(400).send(error));
});

app.listen(PORT, () => console.log(`connecting on port ${PORT}`));
