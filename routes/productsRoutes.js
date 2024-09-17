
const express = require("express");
const router = express.Router();
const Product = require("../models/Product"); 


router.get("/", async (req, res) => {
  const { q } = req.query; 

  try {
    
    const products = await Product.find({
      title: { $regex: q, $options: "i" }, 
    }).limit(5); 

    res.json(products); 
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

module.exports = router;
