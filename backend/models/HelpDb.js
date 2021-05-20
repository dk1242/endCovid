const mongoose = require("mongoose");

const HelpSchema = new mongoose.Schema(
  {
    helpType: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    district: {
      type: String,
    },
    phoneNo: {
      type: String,
    },
    email: {
      type: String,
    },
    up: {
      type: Number,
      default: 0,
    },
    down: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Help", HelpSchema);
