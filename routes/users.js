const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.get("/all", userController.getAllUsers);
router.get("/:id", userController.selectUser);
router.post('/', userController.addUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
