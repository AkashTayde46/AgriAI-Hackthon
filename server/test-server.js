// // external packages
// const express = require('express');
// const bodyParser = require('body-parser');
// require('dotenv').config();

// // Start the webapp
// const webApp = express();

// // Webapp settings
// webApp.use(bodyParser.urlencoded({
//     extended: true
// }));
// webApp.use(bodyParser.json());

// // Server Port
// const PORT = 5000;

// // Home route
// webApp.get('/', (req, res) => {
//     res.send(`Hello World.!`);
// });

// const WA = require('./helper-function/whatsapp-send-message');

// // Route for WhatsApp
// // Route for WhatsApp
// webApp.post('/whatsapp', async (req, res) => {
//     let message = req.body.Body ? req.body.Body.trim().toLowerCase() : '';
//     let senderID = req.body.From;

//     console.log("📩 Message received:", message);
//     console.log("📱 From:", senderID);

//     // Personalized reply logic
//     let reply = `Hello! 👋 How can we help you today?`;

//     if (message.includes('hello') || message.includes('hi')) {
//         reply = `Hi there! 🌱 How can I assist you with your farming today?`;
//     } else if (message.includes('crop')) {
//         reply = `You can grow Wheat, Rice, or Maize this season 🌾`;
//     } else if (message.includes('weather')) {
//         reply = `Today’s forecast: ☀️ Sunny with chances of rain in the evening 🌦️`;
//     } else if (message.includes('price')) {
//         reply = `Current market prices: Wheat ₹2200/quintal, Rice ₹2400/quintal 🌾`;
//     }

//     // Send the personalized message back
//     await WA.sendMessage(reply, senderID);

//     // Optional: respond to Twilio immediately to avoid timeouts
//     res.status(200).send('OK');
// });


// // Start the server
// webApp.listen(PORT, () => {
//     console.log(`Server is up and running at ${PORT}`);
// });

// external packages
// external packages
// external packages
// external packages
// external packages
// external packages
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config();

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(bodyParser.urlencoded({ extended: true }));
webApp.use(bodyParser.json());

// Server Port
const PORT = 5000;

// Home route
webApp.get("/", (req, res) => {
  res.send(`Hello World.!`);
});

// WhatsApp helper
const WA = require("./helper-function/whatsapp-send-message");

// NVIDIA API config
const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;

// -------------------- UTILITY FUNCTIONS --------------------

// Shorten text to max 1500 characters for WhatsApp
function shortenResponse(text, limit = 1500) {
  if (!text) return "";
  return text.length <= limit ? text : text.substring(0, limit - 50) + "...";
}

// -------------------- NVIDIA FUNCTION --------------------
async function callNVIDIA(userMessage) {
  try {
    const response = await axios.post(
      NVIDIA_API_URL,
      {
        model: "meta/llama-3.1-8b-instruct",
        messages: [
          {
            role: "system",
            content:
              "You are an agriculture expert. Keep responses concise and under 1500 characters."
          },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 300 // limits output length
      },
      {
        headers: {
          Authorization: `Bearer ${NVIDIA_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const fullReply = response.data.choices[0].message.content;
    return shortenResponse(fullReply);
  } catch (error) {
    console.error("❌ NVIDIA API Error:", error.response?.data || error.message);
    throw new Error("Failed to fetch response from NVIDIA API.");
  }
}

// -------------------- WHATSAPP ROUTE --------------------
webApp.post("/whatsapp", async (req, res) => {
  const message = req.body.Body ? req.body.Body.trim() : "";
  const senderID = req.body.From;

  console.log("📩 Message received:", message);
  console.log("📱 From:", senderID);

  try {
    const reply = await callNVIDIA(message);
    console.log("🤖 NVIDIA Reply:", reply);

    await WA.sendMessage(reply, senderID);
  } catch (error) {
    console.error("❌ Error sending reply:", error.message);
    await WA.sendMessage(
      "⚠️ Sorry, I'm having trouble connecting to the AI right now.",
      senderID
    );
  }

  res.status(200).send("OK");
});

// -------------------- START SERVER --------------------
webApp.listen(PORT, () => {
  console.log(`🚀 Server is up and running at ${PORT}`);
});
