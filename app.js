const express = require("express");
const app = express();
const userRouter = require("./routers/Users");

app.use("/users", userRouter);

module.exports = app