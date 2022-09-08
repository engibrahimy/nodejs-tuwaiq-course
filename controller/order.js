// Import order schema
const order = require("../models/order");

// Get list of all orders
module.exports.getOrders = async (req, res) => {
  orders = await order.find();
  res.send(orders);
};

// Create order
module.exports.createOrder = async (req, res) => {
  newOrder = await order({ ...req.body }).save();
  res.send("new order created!");
};

// Delete one order by Id
module.exports.deleteOrder = async (req, res) => {
  order.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(`There is an error ${err}`);
    } else {
      res.send("order deleted!");
    }
  });
};
