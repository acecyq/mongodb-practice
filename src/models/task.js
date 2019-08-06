const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: {
    required: true,
    type: String
  },
  status: {
    type: String,
    validate(value) {
      if (value !== "complete" && value !== "incomplete") {
        throw new Error("Status should either be complete and incomplete");
      }
    }
  }
});

module.exports = Task;

// const newTask = new Task({ title: "Ride motorcycle", status: "incomplete" });

// newTask
//   .save()
//   .then(result => console.log("result", result))
//   .catch(error => console.log("error", error));
