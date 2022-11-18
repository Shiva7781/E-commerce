const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const userRoute = require("./routes/user.controller");

//
app.use("/api/users", userRoute);

//

module.exports = app;
