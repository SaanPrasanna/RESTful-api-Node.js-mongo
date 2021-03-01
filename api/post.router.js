const {
  getPosts,
  createPost,
  updatePost,
  getPostById,
  deletePost,
} = require("./post.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.get("/", checkToken, getPosts);
router.post("/", checkToken, createPost);
router.patch("/:id", checkToken, updatePost);
router.get("/:id", checkToken, getPostById);
router.delete("/:id", checkToken, deletePost);

module.exports = router;
