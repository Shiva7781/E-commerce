const express = require("express");
const app = express();

const userRoute = require("./routes/user.controller");
const authRoute = require("./routes/auth.controller");

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

module.exports = app;
