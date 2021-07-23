const express = require("express");
const router = express.Router();
const taskController = require("../controllers/tasks");

router.post("/createTask", taskController.createTask, (req, res) => {
  res.status(200).send(console.log(res.locals.task));
});

router.get("/getAllTasks", taskController.getAllTasks, (req, res) => {
  res.status(200).send(res.locals);
});

module.exports = router;
