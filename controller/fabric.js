// Import user schema
const fabric = require("../models/fabric");

// Get list of all users
module.exports.getFabrics = async (req, res) => {
  fabrics = await fabric.find();
  res.send(fabrics);
};

// Create user
module.exports.addFabric = async (req, res) => {
  // console.log(req.body)
  newFabric = await new fabric({ ...req.body }).save();
  //res.send("new " + newFabric.color + " " + newFabric.name + "fabric added!");
  res.send("new fabric added!");
};

// Delete one user by Id
module.exports.deleteFabric = async (req, res) => {
  user.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(`There is an error ${err}`);
    } else {
      res.send("fabric deleted!");
    }
  });
};
