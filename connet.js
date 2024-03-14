const mongoose = require("mongoose");
require("dotenv").config();

function connectDB(func) {
  mongoose
    .connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => func())
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
