const { getPosts } = require("./post.controller");
const router = require("express").Router();

router.get("/", getPosts);

module.exports = router;
