// Import user schema
const user = require("../models/user");

// Get list of all users
module.exports.getUsers = async (req, res) => {
  users = await user.find();
  res.send(users);
};

// Create user
module.exports.createUser = async (req, res) => {
  newUser = await user({ ...req.body }).save();
  res.send("user created!");
};

// Delete one user by Id
module.exports.deleteUser = async (req, res) => {
  user.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(`There is an error ${err}`);
    } else {
      res.send("user deleted!");
    }
  });
};
