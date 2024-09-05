const express = require("express");
const detailController=require("../controllers/companyDetailController")
const router=express.Router();

router.get('/detail', detailController);

module.exports = router;