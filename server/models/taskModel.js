const mongoose = require('mongoose');

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

module.exports = mongoose.model('taskModel', taskSchema);
