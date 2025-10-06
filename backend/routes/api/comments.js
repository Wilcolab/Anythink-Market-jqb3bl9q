const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// hey github, this is a test comment
// Create a new comment

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add a new endpoint function for deleting a comment by ID
// Delete a comment by ID
router.delete("/:id", async (req, res) => {
    try {
        // Remove the comment with the given ID
        const deleted = await Comment.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Comment not found" });
        res.json({ message: "Comment deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});
