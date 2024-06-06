const mongoose = require("mongoose");

const mongooseViewSchema = new mongoose.Schema({
  deviceInformation: {
    type: String,
  },
  DeviceType: {
    type: String,
  },
});

module.exports = mongoose.model("view", mongooseViewSchema);
