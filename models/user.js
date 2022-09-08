// Require Mongoose and use Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Schema
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    type: {
      type: String,
      required: true,
      eunm: ["customer", "tailor", "master tailor"],
    },
    speciality: { type: String },
    isAdmin: { type: Boolean }
  },
  { timestamps: true }
);

// Create model with Schema then export
const user = mongoose.model("user", userSchema);
module.exports = user;
