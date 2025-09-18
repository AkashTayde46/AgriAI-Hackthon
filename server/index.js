// server.js

// Load environment variables FIRST
require('dotenv').config(); // Load environment variables from .env file

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');
const http = require('http'); // Needed for Socket.io
const { Server } = require('socket.io');

// Create an Express application
const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-session-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  }
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
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

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello from the AgriAI backend!');
});

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const schemeRoutes = require('./routes/schemeRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const communityRoutes = require('./routes/communityRoutes');

// Use API routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/schemes', schemeRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/communities', communityRoutes);

// ---------------------- SOCKET.IO SETUP ----------------------

// Create HTTP server
const server = http.createServer(app);

// Create Socket.io server
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Set Socket.io instance for community routes
communityRoutes.setSocketIO(io);

// Socket.io connection logic
io.on('connection', (socket) => {
  console.log('⚡ New client connected:', socket.id);

  // Join user-specific room for notifications
  socket.on('joinUserRoom', (userId) => {
    socket.join(`user_${userId}`);
    console.log(`User ${userId} joined their notification room`);
  });

  // Join creator-specific room for join request notifications
  socket.on('joinCreatorRoom', (creatorId) => {
    socket.join(`creator_${creatorId}`);
    console.log(`Creator ${creatorId} joined their notification room`);
  });

  // Join community room for real-time messaging
  socket.on('joinCommunityRoom', (communityId) => {
    socket.join(`community_${communityId}`);
    console.log(`User ${socket.id} joined community room: ${communityId}`);
  });

  // Leave community room
  socket.on('leaveCommunityRoom', (communityId) => {
    socket.leave(`community_${communityId}`);
    console.log(`User ${socket.id} left community room: ${communityId}`);
  });

  // Handle sending chat messages (legacy support)
  socket.on('chatMessage', (data) => {
    // Broadcast message to everyone in the room
    io.to(data.room).emit('newMessage', {
      sender: data.sender,
      message: data.message,
      timestamp: new Date().toISOString()
    });
  });

  // Handle community message sending
  socket.on('communityMessage', (data) => {
    // Broadcast message to all members in the community
    io.to(`community_${data.communityId}`).emit('newMessage', {
      sender: data.sender,
      message: data.message,
      timestamp: new Date().toISOString()
    });
  });

  socket.on('disconnect', () => {
    console.log('❌ Client disconnected:', socket.id);
  });
});

// ---------------------- START SERVER ----------------------
server.listen(port, () => {
  console.log(`🚀 Server with Socket.io is running on port: ${port}`);
});