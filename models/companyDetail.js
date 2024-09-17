const mongoose=require("mongoose");
const companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, 
    about: String,
    ourServices: String,
    privacypolicy: String,
});

const companyDetail = mongoose.model("detail", companySchema);

module.exports = companyDetail;