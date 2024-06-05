// Import mongoose module
const mongoose = require("mongoose");

// Define the schema for the value model
const ValueSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter product name"], // Title is required
    },

    description: {
      type: String,
      required: true, // Description is required
      default: 0, // Default value for description (if not provided)
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

// Create a mongoose model based on the schema
const Value = mongoose.model("Values", ValueSchema);

// Export the Value model for use in other files
module.exports = Value;
