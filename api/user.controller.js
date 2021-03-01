const Posts = require("../models/posts");
const User = require("../models/user");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    const newUser = new User(req.body);
    await newUser
      .save()
      .then((result) => {
        result.password = undefined;
        res.json({ success: 1, result: result });
      })
      .catch((err) => {
        res.json({ success: 0, result: err });
      });
  },

  login: async (req, res) => {
    await User.findOne({ email: req.body.email })
      .then((results) => {
        if (!results)
          res.status(404).json({ success: 0, result: "No user found" });
        const result = compareSync(req.body.password, results.password);
        if (result) {
          results.password = undefined;
          const jsonToken = sign({ result: results }, "spm1234", {
            expiresIn: "1h",
          });
          return res.json({
            success: 1,
            message: "Login successfuly",
            token: jsonToken,
          });
        } else {
          return res.json({
            success: 0,
            message: "Invalid email or Password",
          });
        }
      })
      .catch((err) => res.status(500).json({ success: 0, result: err }));
  },
};
