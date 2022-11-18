const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // fname: { type: String, require: true },

    // lname: { type: String, require: true },

    username: { type: String, require: true, unique: true },

    email: { type: String, require: true, unique: true },

    // mobile: { type: Number, required: true, unique: true },

    password: { type: String, require: true },

    isAdmin: { type: Boolean, default: false },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
