const UserService = require("../services/userService.js");


const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.findAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const selectUser = async (req, res, next) => {
    try {
      const user = await UserService.findOne(req.params);
      if (!user) {
        throw { name: "NotFound" };
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };

const addUser = async (req, res, next) => {
  try {
    const user = UserService.create(req.body);
    res.status(201).json({ message: "New User Added" });
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = UserService.update(req.params, req.body);
    if (!user) {
      throw { name: "NotFound" };
    }
    res.status(201).json({ message: "User Data Updated" });
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await UserService.destroy(req.params)
    if (!user) {
      throw { name: "NotFound" };
    }
    res.status(201).json({ message: "User Removed" });
  } catch (err) {
    next(err);
  }
};

module.exports = { 
  getAllUsers, 
  selectUser, 
  addUser, 
  updateUser, 
  deleteUser };
