// Import the Value model
const Value = require("../models/val.des.js");

// Controller function to get all values
const getValues = async (req, res) => {
  try {
    // Retrieve all values from the database
    const products = await Value.find({});
    // Respond with the retrieved values
    res.status(200).json(products);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a single value by ID
const getSingleValue = async (req, res) => {
  try {
    // Extract the value ID from the request parameters
    const { id } = req.params;
    // Find the value by its ID in the database
    const product = await Value.findById(id);
    // Respond with the retrieved value
    res.status(200).json(product);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: error.message });
  }
};

// Controller function to create a new value
const createValue = async (req, res) => {
  try {
    // Create a new value using the request body data
    const product = await Value.create(req.body);
    // Respond with the created value
    res.status(200).json(product);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a value by ID
const updateValue = async (req, res) => {
  try {
    // Extract the value ID from the request parameters
    const { id } = req.params;
    // Find and update the value by its ID using the request body data
    const product = await Value.findByIdAndUpdate(id, req.body);
    // If the value doesn't exist, return an error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Retrieve and respond with the updated value
    const updatedProduct = await Value.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: error.message });
  }
};

// Controller function to delete a value by ID
const deleteValue = async (req, res) => {
  try {
    // Extract the value ID from the request parameters
    const { id } = req.params;
    // Find and delete the value by its ID
    const product = await Value.findByIdAndDelete(id);
    // If the value doesn't exist, return an error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Respond with a success message upon successful deletion
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle any errors that occur during the operation
    res.status(500).json({ message: error.message });
  }
};

// Export all controller functions for use in routes
module.exports = {
  getValues,
  getSingleValue,
  createValue,
  updateValue,
  deleteValue,
};
