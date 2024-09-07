const express = require("express");
const EnsureAuthenticated = require("../middlewares/Auth");

const router = express.Router(); 

4
router.get("/", EnsureAuthenticated, (req, res) => {
  console.log('---- logged in user detail' ,req.user)
  res.status(200).json([
    {
      name: "mobile",
      price: "10000",
    },
    {
      name: "tv",
      price: "20000",
    },
  ]);
});

module.exports = router;
