const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks');

// eventually call in controllers

// router.get('/getTasks', taskController .getTasks, (req, res) => {
//   // route for getting all taks from the db
//   res.status(200).json(res.tasks);
// });

module.exports = router;
