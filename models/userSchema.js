const mongoose = require('mongoose')
const userSchema=  new mongoose.Schema({
    name:String,
    userName:String,
    passWord:String,
});



const userDetail = mongoose.model("users",userSchema);
module.exports = userDetail;
