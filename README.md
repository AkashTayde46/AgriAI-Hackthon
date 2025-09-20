# KrushiSetu - Smart Agricultural Solutions

This project provides comprehensive agricultural solutions with AI-powered crop recommendations, disease detection, and smart farming tools.

## Project Structure

```
KrushiSetu/
├── client/          # React frontend (Vite)
├── server/          # Express.js backend
├── cnn_model/       # Python CNN model for plant disease detection
├── Crop_Recommendation/  # Python Flask app for crop recommendations
└── README.md
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (optional - for full functionality)

## Setup Instructions

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory (copy from `env.example`):
   ```bash
   # Copy the example file
   cp env.example .env
   
   # Or create manually with these values:
   # Server Configuration
   PORT=8000
   NODE_ENV=development
   
   # MongoDB Configuration (optional)
   MONGO_URI=mongodb://localhost:27017/agriai
   ```

4. Start the backend server:
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Or production mode
   npm start
   ```

   The backend will be running on `http://localhost:8000`

### 2. Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

   The frontend will be running on `http://localhost:3000`

## API Endpoints

The backend provides the following endpoints:

- `GET /` - Basic server status
- `GET /api/health` - Health check endpoint
- `GET /api/test` - Test endpoint with server information
- `GET /api/sample-data` - Sample farm data for testing

## Features

### Frontend Features:
- ✅ Real-time connection status indicator
- ✅ Interactive API testing buttons
- ✅ Sample data display with farm information
- ✅ Error handling and loading states
- ✅ Responsive design
- ✅ Modern UI with gradient backgrounds

### Backend Features:
- ✅ Express.js server with CORS enabled
- ✅ MongoDB connection (optional)
- ✅ Multiple API endpoints for testing
- ✅ JSON response formatting
- ✅ Environment configuration
- ✅ Error handling

## Testing the Connection

1. Start both servers (backend on port 5000, frontend on port 3000)
2. Open `http://localhost:3000` in your browser
3. The app will automatically test the backend connection
4. Use the buttons to test different API endpoints
5. Check the connection status and server information

## Troubleshooting

### Backend Issues:
- Ensure port 8000 is not in use by another application
- Check that all dependencies are installed
- Verify MongoDB connection if using database features

### Frontend Issues:
- Ensure port 3000 is not in use
- Check that axios is properly installed
- Verify the proxy configuration in `vite.config.js`

### Connection Issues:
- Make sure both servers are running
- Check browser console for CORS errors
- Verify the backend is accessible at `http://localhost:8000`

## Development Notes

- The frontend uses Vite's proxy feature to avoid CORS issues during development
- Axios is configured with interceptors for request/response logging
- The backend includes CORS middleware for cross-origin requests
- MongoDB connection is optional - the app works without it

## Next Steps

This basic setup can be extended with:
- User authentication
- Database models and CRUD operations
- Real-time features with WebSockets
- File upload capabilities
- Production deployment configuration
