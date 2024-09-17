const express = require("express");
const router = express.Router();
const getSearchProduct = require("../controllers/searchController"); // Correct path to searchController

// Search route
router.get("/api/products", getSearchProduct);

module.exports = router;
