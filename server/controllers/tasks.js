const db = require("../models/taskModel.js");

const { taskModel } = require("../models/taskModel");

const taskController = {};

taskController.getAllTasks = async (req, res, next) => {
  // console.log("this is the req for getAllTasks " + req);
  const tasks = await taskModel.find();
  res.locals = tasks;
  return next();
};

// taskController.deleteTask = async (req, res, next) => {
//   // const tasks
//   const { tasks: item } = req.body;
//   console.log("this is the item: ", item);

//   await taskModel.findOneAndDelete({ tasks: item }, (err, deletedTask) => {
//     if (err) return res.status(400).json(err.message);
//     return res.status(200).json(deletedTask);
//   });
//   // return next();

//   // res.locals.task = taskInfo.task;
// };

taskController.deleteTask = async (req, res, next) => {
  const { task } = req.body;

  console.log(task);

  try {
    const deleteTask = await taskModel.deleteOne({ task: task });
    res.locals = task;
    return next();
  } catch (error) {
    console.log("deleteTaskController ", error);
  }

  // next();
};

taskController.createTask = async (req, res, next) => {
  //   const { params } = req.body;
  console.log("this is the req " + req);
  const taskInfo = req.body.data;
  console.log(req.body + " this is from the front");
  await taskModel
    .create(taskInfo)
    .then((data) => {
      res.locals.task = data;
      console.log("You saved a task!");
      return next();
    })
    .catch((err) => console.log(err));
};

module.exports = taskController;
