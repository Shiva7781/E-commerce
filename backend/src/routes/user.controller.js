const express = require("express");
const router = express.Router();

router.get("/usertest", (req, res) => {
  res.send("user get test is successfull");
});

router.post("userposttest", (req, res) => {
  res.send("user post test is successful");
});

module.exports = router;
