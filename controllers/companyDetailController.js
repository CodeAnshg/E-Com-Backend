const mongoose=require("mongoose");

const details = require("../models/companyDetail")

const getAllDetails=(req,res)=>{
    details.find()
    .then((result)=>{
        console.log('Fethced Users:',result);
        res.status(200).json(result);
    })
    .catch((error)=>{
        console.log("error : ",error)
        res.send(500).send(error);
    });
}    

module.exports = getAllDetails;