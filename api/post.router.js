const {
  getPosts,
  createPost,
  updatePost,
  getPostById,
  deletePost,
} = require("./post.controller");
const router = require("express").Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.get("/:id", getPostById);
router.delete("/:id", deletePost);

module.exports = router;
