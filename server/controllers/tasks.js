const db = require("../models/taskModel.js");

const { taskModel } = require("../models/taskModel");

const taskController = {};

taskController.getAllTasks = async (req, res, next) => {
  console.log("this is the req for getAllTasks " + req);
  const tasks = await taskModel.find();
  res.locals = tasks;
  return next();
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
