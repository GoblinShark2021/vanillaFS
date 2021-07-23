const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks");

router.post("/createTask", taskController.createTask, (req, res) => {
  res.status(200).send(res.locals.task);
});

router.get("/getAllTasks", taskController.getAllTasks, (req, res) => {
  res.status(200).send(res.locals);
});

router.delete("/deleteTask", taskController.deleteTask, (req, res) => {
  // const resObj = Object.assign({}, res.locals);
  // console.log("resObj " + resObj);
  // const reqObj = Object.assign({}, req.locals);
  // console.log("reqObj " + reqObj);
  res.status(200).send(res.locals);
});

module.exports = router;
