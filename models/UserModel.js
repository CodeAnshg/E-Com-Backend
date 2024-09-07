const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
});

// Create the User model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
