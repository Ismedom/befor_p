const mongoose = require("mongoose");

const mongooseScema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  gitHubSrc: {
    type: String,
    required: true,
  },
  productSrc: {
    type: String,
    required: true,
  },
  explaination: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("data", mongooseScema);
