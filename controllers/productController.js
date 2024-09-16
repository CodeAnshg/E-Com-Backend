const Product = require('../models/productSchema');


exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    let updatedData = products.filter(item => item.meta.barcode !== "9164035109868");
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category; 
    const products = await Product.find({ category: category }); 
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found for this category" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};








