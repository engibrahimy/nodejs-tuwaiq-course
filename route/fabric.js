// Require Express router
const express = require("express");
const router = express.Router();

// Require controllers
const fabricController = require("../controller/fabric");

// Define Routes
router.get("/fabrics", fabricController.getFabrics);
router.post("/fabrics/add", fabricController.addFabric);
router.delete("/fabrics/delete/:id", fabricController.deleteFabric);

module.exports = router;
