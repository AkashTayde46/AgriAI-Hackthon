// server.js

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Create an Express application
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON request bodies

// MongoDB Connection (Optional)
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
    console.log('⚠️  Continuing without MongoDB...');
  });
} else {
  console.log('⚠️  No MongoDB URI provided, running without database');
}

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello from the AgriAI backend!');
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Backend is running successfully!',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'Test endpoint working!',
    data: {
      server: 'AgriAI Backend',
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

// Sample data endpoint for testing
app.get('/api/sample-data', (req, res) => {
  res.json({
    farms: [
      { id: 1, name: 'Green Valley Farm', location: 'California', crops: ['Tomatoes', 'Lettuce'] },
      { id: 2, name: 'Sunrise Agriculture', location: 'Texas', crops: ['Wheat', 'Corn'] },
      { id: 3, name: 'Organic Gardens', location: 'Oregon', crops: ['Apples', 'Berries'] }
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
