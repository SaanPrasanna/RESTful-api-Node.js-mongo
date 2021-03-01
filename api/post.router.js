const { getPosts, createPost } = require("./post.controller");
const router = require("express").Router();

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
