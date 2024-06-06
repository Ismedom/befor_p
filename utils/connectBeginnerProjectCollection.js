const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  if (!process.env.MONGODBURL) {
    throw new Error("MONGODBURL_VIEW environment variable is not defined");
  }
  return mongoose.createConnection(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
