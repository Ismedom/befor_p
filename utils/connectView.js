const mongoose = require("mongoose");
require("dotenv").config();

const connectView = () => {
  if (!process.env.MONGODBURL) {
    throw new Error("MONGODBURL_VIEW environment variable is not defined");
  }
  return mongoose.connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectView;
