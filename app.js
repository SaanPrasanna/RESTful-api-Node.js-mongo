require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");

//Routers
const postRouter = require("./api/post.router");
const userRouter = require("./api/user.router");

const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.use("/api/posts",postRouter);
app.use("/api/user",userRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("SERVER RUN WITH PORT " + process.env.PORT);
});
