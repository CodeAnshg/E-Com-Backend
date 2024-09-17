// controllers/searchController.js
const Product = require("../models/Product"); 

const getSearchProduct = async (req, res) => {
  const { q } = req.query; 
  console.log(`Search term: ${q}`); 

  try {
    
    const products = await Product.find({
      $or: [
        { title: { $regex: q, $options: "i" } }, 
        { category: { $regex: q, $options: "i" } }, 
        { description: { $regex: q, $options: "i" } }, 
      ],
    }).limit(5); 

    console.log("Found products:", products); 
    res.json(products); 
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
};

module.exports = getSearchProduct;
