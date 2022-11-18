const express = require("express");
const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("User Test is succesful");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log("usesname:", username);
  res.send(`Your username is ${username}`);
});

module.exports = router;
