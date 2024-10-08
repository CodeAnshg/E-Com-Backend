const mongoose = require("mongoose");


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
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the Product model
        ref: "Product", // Assuming the Product model is named "Product"
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1, // Default to 1 if no quantity is specified
        min: 1,
      }
    }
  ]
});


const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;

