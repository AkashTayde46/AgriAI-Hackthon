// src/socket.js
import { io } from "socket.io-client";

// Replace with your backend URL
export const socket = io("http://localhost:8000", {
  autoConnect: false,   // We'll manually connect when needed
  withCredentials: true // For sessions/cookies
});
