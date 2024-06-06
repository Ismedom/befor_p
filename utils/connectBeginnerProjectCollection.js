const mongoose = require("mongoose");
require("dotenv").config();

function connectDB() {
  const mongoDBUrl = process.env.MONGODBURL;
  if (!mongoDBUrl) {
    throw new Error("MONGODBURL environment variable is not defined");
  }
  return mongoose.createConnection(mongoDBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = connectDB;
