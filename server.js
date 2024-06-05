// Import required modules
const express = require("express"); // Import the Express framework
const cors = require("cors"); // Import CORS middleware for handling Cross-Origin Resource Sharing
const ValueRoute = require("./routes/value.routes.js"); // Import the route handlers for '/api/values'

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies of requests
app.use(express.json());

// Import Mongoose for MongoDB object modeling
const mongoose = require("mongoose");

// Define CORS options
const corsOptions = {
  origin: "*", // Allow requests from any origin
  credentials: true, // Include credentials in CORS requests
  optionSuccessStatus: 200, // Set the success status for OPTIONS requests to 200
};

// Use CORS middleware with the defined options
app.use(cors(corsOptions));

// Use the route handlers for '/api/values'
app.use("/api/values", ValueRoute);

// Connect to MongoDB Atlas database
mongoose
  .connect(
    "mongodb+srv://amin:H%40bibi673@himanshudb.7ixt5e8.mongodb.net/toolWiseApp?retryWrites=true&w=majority&appName=HimanshuDB"
  )
  .then(() => {
    console.log("connected to database "); // Log success message when connected to the database
  })
  .catch((error) => {
    console.log("Connection Finished", error); // Log error if connection fails
  });

// Start the Express server and listen on port 3000
app.listen(3000, () => console.log("server started"));
