//Require Mongoose and use Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define Schema
const orderSchema = new Schema(
  {
    name: { type: String, required: true },
    customerId: { type: Schema.Types.ObjectId, ref: "user", required: true },
    fabricId: { type: Schema.Types.ObjectId, ref: "fabric", required: true },
    description: { type: String, required: true },
    size: { type: String, required: true },
    speciality: { type: String },
    assignedTailor: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    }, //Check if tailor
    price: { type: Number, required: true },
    //status: { type: String, required: true },
    deadline: { type: Date, required: true },
    //paymentMethod: { type: String, required: true, eunm: ["card", "cash"] }, // Put as enumeration
  },
  { timestamps: true }
);

//Find order method
orderSchema.statics.findOrder = function findOrder(orderName) {
  this.find({ name: orderName })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

//Create model with Schema then export
const order = mongoose.model("order", orderSchema);
module.exports = order;
