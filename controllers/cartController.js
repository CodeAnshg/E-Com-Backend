const UserModel = require("../models/UserModel");
const ProductModel = require("../models/productSchema");

// Function to add a product to the user's cart
exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Validate product existence
    const product = await ProductModel.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found", success: false });
    }

    // Find the authenticated user by their ID from the token
    const user = await UserModel.findById(req.user._id);

    // Check if the product already exists in the user's cart
    const productInCart = user.cart.find(item => item.productId.equals(productId));

    if (productInCart) {
      // Update the quantity if the product is already in the cart
      productInCart.quantity += quantity;
    } else {
      // Add the product to the cart
      user.cart.push({ productId, quantity });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Product added to cart", success: true, cart: user.cart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Function to view the user's cart
exports.viewCart = async (req, res) => {
  try {
    // Get the authenticated user's cart details
    const user = await UserModel.findById(req.user._id).populate('cart.productId');
    
    res.status(200).json({ cart: user.cart });
  } catch (error) {
    console.error("Error viewing cart:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};
