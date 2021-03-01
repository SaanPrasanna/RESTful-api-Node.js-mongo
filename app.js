require("dotenv/config");
//const options = require("dotenv/lib/env-options");
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const app = express();
app.use(express.json());
const postRouter = require("./api/post.router");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.use("/api/posts",postRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("SERVER RUN WITH PORT " + process.env.PORT);
});
