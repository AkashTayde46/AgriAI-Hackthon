# Crop Yield Prediction System

This is a machine learning-powered crop yield prediction system that helps farmers forecast crop yields based on location, weather conditions, and farming practices.

## Features

- **AI-Powered Yield Prediction**: Get accurate crop yield forecasts using machine learning
- **Comprehensive Data Input**: Location, crop type, weather data, and farming practices
- **Real-time Analysis**: Instant predictions based on your input data
- **Modern Web Interface**: Beautiful, responsive React frontend
- **RESTful API**: JSON API for integration with other applications

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- Node.js 16 or higher (for React frontend)
- The `crop_yield_model.pkl` model file

### Backend Setup (Flask API)

1. **Navigate to the crop_yeild_prediction directory:**
   ```bash
   cd crop_yeild_prediction
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server:**
   ```bash
   python app.py
   ```
   
   Or use the setup script:
   ```bash
   python run_server.py
   ```

4. **Verify the server is running:**
   - API endpoint: http://localhost:5001/predict
   - Web interface: http://localhost:5001/

### Frontend Setup (React)

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm start
   ```

4. **Access the application:**
   - Main app: http://localhost:3000
   - Yield Prediction: http://localhost:3000/yield-prediction

## API Usage

### Endpoint: POST /predict

**Request Body (JSON):**
```json
{
  "area": "India",
  "item": "Wheat",
  "year": 2024,
  "avg_rainfall": 1200.5,
  "pesticides_tonnes": 150.2,
  "avg_temp": 25.5
}
```

**Response:**
```json
{
  "success": true,
  "predicted_yield": 3245.67,
  "unit": "hg/ha",
  "area": "India",
  "crop": "Wheat",
  "year": 2024,
  "confidence": "High"
}
```

### Input Parameters

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| area | string | Country/Region | "India" |
| item | string | Crop type | "Wheat" |
| year | number | Year of prediction | 2024 |
| avg_rainfall | number | Average rainfall in mm | 1200.5 |
| pesticides_tonnes | number | Pesticides used in tonnes | 150.2 |
| avg_temp | number | Average temperature in °C | 25.5 |

### Supported Crops

The model supports 14 different crop types:
- Wheat, Rice, Maize, Soybeans, Potatoes
- Cassava, Sweet potatoes, Yams, Plantains
- Sorghum, Millet, Barley, Rye, Oats

### Supported Areas

The model supports 137+ countries and regions worldwide, including:
- Major agricultural countries like India, China, USA, Brazil
- European countries like Germany, France, UK
- African countries like Nigeria, Kenya, South Africa
- And many more...

## Model Information

- **Algorithm**: Machine Learning model trained on historical crop yield data
- **Features**: 7 input features including location, crop type, weather, and farming practices
- **Model File**: `crop_yield_model.pkl`
- **Framework**: scikit-learn

## Troubleshooting

### Common Issues

1. **Model file not found:**
   - Ensure `crop_yield_model.pkl` is in the crop_yeild_prediction directory
   - Check file permissions

2. **CORS errors:**
   - The Flask app includes CORS headers for cross-origin requests
   - Ensure both frontend and backend are running

3. **Port conflicts:**
   - Flask runs on port 5001 by default
   - React runs on port 3000 by default
   - Change ports in the respective configuration files if needed

### Error Handling

The API returns appropriate error messages for:
- Invalid input data
- Missing required fields
- Server errors
- Model prediction failures

## Development

### Adding New Features

1. **Backend**: Modify `app.py` to add new endpoints or features
2. **Frontend**: Update React components in `client/src/pages/`
3. **API**: Extend the API service in `client/src/services/`

### Testing

Test the API using curl:
```bash
curl -X POST http://localhost:5001/predict \
  -H "Content-Type: application/json" \
  -d '{"area":"India","item":"Wheat","year":2024,"avg_rainfall":1200.5,"pesticides_tonnes":150.2,"avg_temp":25.5}'
```

## License

This project is part of the AgriAI application suite.
