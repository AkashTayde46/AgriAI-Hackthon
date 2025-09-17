const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
  category: String,
  members: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Community", communitySchema);
