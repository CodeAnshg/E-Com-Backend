const UserModel = require("../models/UserModel");
const ProductModel = require("../models/productSchema");

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false });
    }

    const user = await UserModel.findById(req.user._id);
    const productInCart = user.cart.find(item => item.productId.equals(productId));

    if (productInCart) {
      productInCart.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();

    res.status(200).json({ message: "Product added to cart", success: true, cart: user.cart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

exports.viewCart = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id).populate('cart.productId');
    
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error("Error viewing cart:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
