// Require mongoose and express
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

// Listen
require("dotenv").config();

const userRoute = require("./route/user");
app.use("/", userRoute);

const fabricRoute = require("./route/fabric");
app.use("/", fabricRoute);

const orderRoute = require("./route/order");
app.use("/", orderRoute);

app.listen(process.env.PORT, () => {
  console.log("server working");
});

//Import models
const user = require("./models/user");
const order = require("./models/order");
const fabric = require("./models/fabric");

// Connect to Database
main();
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:iamadmin123@cluster0.zxyntwv.mongodb.net/tailor"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}
