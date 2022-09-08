// Require Express router
const express = require("express");
const router = express.Router();

// Require controllers
const orderController = require("../controller/order");

// Define Routes
router.get("/orders", orderController.getOrders);
router.post("/orders/create", orderController.createOrder);
router.delete("/orders/delete/:id", orderController.deleteOrder);

module.exports = router;
