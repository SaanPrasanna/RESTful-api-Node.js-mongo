const Posts = require("../models/posts");

module.exports = {
  getPosts: async (req, res) => {
    await Posts.find()
      .then((result) => {
        if (!result) res.json({ success: false, result: "No results found" });
        res.json({ success: true, result: result });
      })
      .catch((err) => res.json({ success: false, result: err }));
  },
};
