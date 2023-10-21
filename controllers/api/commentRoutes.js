const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newComment = await Comment.create({
      commentText: req.body.comment,
      user_id: req.session.user_id,
      blog_id: req.body.blogId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
