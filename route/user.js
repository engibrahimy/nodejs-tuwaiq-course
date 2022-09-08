// Require Express router
const express = require("express");
const router = express.Router();

// Require controllers
const userController = require("../controller/user");

// Define Routes
router.get("/users", userController.getUsers);
router.post("/users/create",userController.createUser)
router.delete("/users/delete/:id", userController.deleteUser)

module.exports = router;
