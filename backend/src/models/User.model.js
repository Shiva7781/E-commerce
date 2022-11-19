const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", UserSchema);
