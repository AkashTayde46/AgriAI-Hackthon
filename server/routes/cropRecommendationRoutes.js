const express = require('express');
const router = express.Router();
const axios = require('axios');

// Change URL to point to Python ML service
const ML_SERVICE_URL = 'http://localhost:5000';

// Configure axios instance with defaults
const mlClient = axios.create({
  baseURL: ML_SERVICE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Get crop recommendation
router.post('/predict', async (req, res) => {
  try {
    // Log the incoming request
    console.log('Received prediction request:', req.body);

    // Make request to ML service
    const response = await mlClient.post('/predict', req.body);
    
    // Log successful response
    console.log('ML service response:', response.data);
    res.json(response.data);

  } catch (error) {
    // Detailed error logging
    console.error('ML Service Error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      requestBody: req.body
    });

    // Send appropriate error response
    if (error.response) {
      // ML service responded with error
      res.status(error.response.status).json({
        error: 'ML Service Error',
        details: error.response.data
      });
    } else if (error.code === 'ECONNREFUSED') {
      // ML service not running
      res.status(503).json({
        error: 'ML Service Unavailable',
        details: 'Cannot connect to ML service. Please ensure it is running.'
      });
    } else {
      // Unknown error
      res.status(500).json({
        error: 'Internal Server Error',
        details: error.message
      });
    }
  }
});

// Health check endpoint
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Crop Recommendation API is running',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
