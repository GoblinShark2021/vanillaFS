const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
      minLength: 5,
    },
  },
  {
    timestamps: true, // create timestamp when modified or created
  }
);

const taskModel = mongoose.model("taskModel", taskSchema);

module.exports = {
  taskModel,
};
