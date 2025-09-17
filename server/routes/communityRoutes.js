const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");

// Import Models
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Marketplace = require("../models/Marketplace");
const Event = require("../models/Event");
const Notification = require("../models/Notification");

// ----------------- POSTS -----------------

// Create Post
router.post("/posts", protect, async (req, res) => {
  try {
    const post = await Post.create({
      author: req.user._id,
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Posts
router.get("/posts", async (req, res) => {
  const posts = await Post.find().populate("author", "name avatar");
  res.json(posts);
});

// ----------------- COMMENTS -----------------

// Add Comment
router.post("/comments/:postId", protect, async (req, res) => {
  try {
    const comment = await Comment.create({
      post: req.params.postId,
      author: req.user._id,
      content: req.body.content,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Comments for a Post
router.get("/comments/:postId", async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId }).populate("author", "name avatar");
  res.json(comments);
});

// ----------------- MARKETPLACE -----------------

router.post("/marketplace", protect, async (req, res) => {
  try {
    const item = await Marketplace.create({ ...req.body, seller: req.user._id });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/marketplace", async (req, res) => {
  const items = await Marketplace.find().populate("seller", "name location");
  res.json(items);
});

// ----------------- EVENTS -----------------

router.post("/events", protect, async (req, res) => {
  try {
    const event = await Event.create({ ...req.body, organizer: req.user._id });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/events", async (req, res) => {
  const events = await Event.find().populate("organizer", "name location");
  res.json(events);
});

// ----------------- NOTIFICATIONS -----------------

router.get("/notifications", protect, async (req, res) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
