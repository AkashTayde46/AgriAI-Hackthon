// server.js

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch((err) => {
  console.error('❌ MongoDB Connection Error:', err.message);
  process.exit(1); // Exit process if DB fails
});

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello from the backend with MongoDB connected!');
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
