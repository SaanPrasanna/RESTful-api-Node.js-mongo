const { getPosts, createPost, updatePost } = require("./post.controller");
const router = require("express").Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);

module.exports = router;
