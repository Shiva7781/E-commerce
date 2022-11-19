const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  // Validate request

  const { name, mobile, username, email, password, cpassword } = req.body;

  if (!name || !mobile || !username || !email || !password || !cpassword) {
    return res.status(420).json({ message: "Input field can not be empty!" });
  }

  try {
    const mobileExist = await User.findOne({ mobile: mobile });
    const usernameExist = await User.findOne({ username: username });
    const emailExist = await User.findOne({ email: email });

    if (mobileExist) {
      return res.status(420).json({ error: "Mobile number already exist" });
    } else if (usernameExist) {
      return res.status(420).json({ error: "Username already exist" });
    } else if (emailExist) {
      return res.status(420).json({ error: "Email already exist" });
    } else if (password !== cpassword) {
      return res.status(420).json({ error: "Password are not matching" });
    } else {
      // creating a new mongoose doc from user data also hashing the password

      const newUser = new User({
        name,
        mobile,
        username,
        email,
        password: bcrypt.hashSync(password, 11),
      });

      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json("User does not exist");

    // checking user password with hashed password stored in the database
    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    // console.log(validPassword);

    if (!validPassword) return res.status(401).json("Wrong Username/Password");

    // sending user data
    // res.status(200).json(user);

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    // sending JWT with user data except password
    const { password, ...others } = user._doc;
    res.status(200).json({ accessToken, ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
