const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  community: { type: String, required: true },
  sender: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  isPinned: { type: Boolean, default: false },
});

module.exports = mongoose.model("Message", messageSchema);
