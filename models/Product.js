
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  category: String,
  price: Number,
  stock: Number,
  thumbnail: String,
  
});


const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;
