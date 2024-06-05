const mongoose = require("mongoose");

const ValueSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"],
    },

    description: {
      type: String,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Value = mongoose.model("Values", ValueSchema);

module.exports = Value;
