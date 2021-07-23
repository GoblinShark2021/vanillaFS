const e = require("express");
const User = require("../models/userModel");

const userController = {};

// userController.createUser = async(req, res, next) => {

// }

userController.verifyUser = async (req, res, next) => {
  const { username, password } = req.body;
  console.log("request is " + req.body.username);

  if (!username || !password) console.log("incorrect username and/or pw");

  try {
    const existUsername = await User.findOne({
      username,
    });

    if (!existUsername) {
      console.log("username does not exist");
      res.locals = req.body;
      return next();
    }
    if (!(await userController.comparePassword(password)))
      console.log("pw does not exist");

    res.locals.id = user._doc_.id;
    next();
  } catch (err) {
    res.locals = req.body;
    next("Error " + JSON.stringify(err));
  }
};

module.exports = userController;
