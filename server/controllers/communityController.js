const Community = require("../models/Community");
const Message = require("../models/Message");

// ------------------- GET ALL COMMUNITIES -------------------
const getCommunities = async (req, res) => {
  try {
    const communities = await Community.find().sort({ createdAt: -1 });
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------- CREATE COMMUNITY -------------------
const createCommunity = async (req, res, io) => {
  try {
    const { name, description, category } = req.body;

    // Check if community already exists
    const exists = await Community.findOne({ name });
    if (exists) return res.status(400).json({ message: "Community already exists" });

    const community = new Community({
      name,
      description: description || "A new farming community",
      category: category || "General",
      members: 1,
    });

    await community.save();

    // Emit to all connected clients to update their community list
    if (io) io.emit("updateCommunities", await Community.find());

    res.status(201).json(community);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------- GET MESSAGES OF A COMMUNITY -------------------
const getMessages = async (req, res) => {
  try {
    const { communityName } = req.params;
    const messages = await Message.find({ community: communityName }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ------------------- CREATE MESSAGE -------------------
const createMessage = async (req, res, io) => {
  try {
    const { community, sender, message } = req.body;

    if (!community || !sender || !message)
      return res.status(400).json({ message: "All fields are required" });

    const newMessage = new Message({ community, sender, message });
    await newMessage.save();

    // Emit the message to all users in that community
    if (io) io.to(community).emit("newMessage", newMessage);

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCommunities,
  createCommunity,
  getMessages,
  createMessage,
};
