const router = require("express").Router();
const User = require("../models/User.model");

// Register
router.post("/register", async (req, res) => {
  // validate request
  if (!req.body) {
    // return res.status(400).send({ message: "Input field can not be empty!" });
    return res.status(400).json({ message: "Input field can not be empty!" });
  }

  const newUser = new User({
    mobile: req.body.mobile,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
