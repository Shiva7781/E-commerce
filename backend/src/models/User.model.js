const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },

    mobile: { type: Number, required: true, unique: true },

    username: { type: String, require: true, unique: true },

    email: { type: String, require: true, unique: true },

    password: { type: String, require: true },

    cpassword: { type: String, require: true },

    isAdmin: { type: Boolean, default: false },
  },

  { timestamps: true, versionKey: false }
);

// Here hashing the password
UserSchema.pre("save", async function (next) {
  try {
    const hash = bcrypt.hashSync(this.password, 10);
    const chash = bcrypt.hashSync(this.cpassword, 10);
    this.password = hash;
    this.cpassword = chash;
    return next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("User", UserSchema);
