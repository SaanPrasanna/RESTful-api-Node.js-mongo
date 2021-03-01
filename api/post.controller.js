const Posts = require("../models/posts");

module.exports = {
  createPost: async (req, res) => {
    const newPost = new Posts(req.body);
    await newPost
      .save()
      .then((result) => {
        res.json({ success: 1, result: result });
      })
      .catch((err) => {
        res.json({ success: 0, result: err });
      });
  },
  getPosts: async (req, res) => {
    await Posts.find()
      .then((result) => {
        if (!result) res.json({ success: 0, result: "No results found" });
        res.json({ success: 1, result: result });
      })
      .catch((err) => res.json({ success: 0, result: err }));
  },
};
