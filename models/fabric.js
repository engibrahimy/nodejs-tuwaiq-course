// Require Mongoose and use Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define Schema
const fabricSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    length: {
      number: { type: Number, required: true },
      unit: { type: String, default: "m" },
    },
    customerId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  },
  { timestamps: true }
);

// Create model with Schema then export
const fabric = mongoose.model("fabric", fabricSchema);
module.exports = fabric;
