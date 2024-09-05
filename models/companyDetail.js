const mongoose=require("mongoose");
const companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // mongo db will automatically create an id for the document. // object id is a data type in mongodb that is used to store the unique identifier of the document.
    about: String,
    ourServices: String,
    privacypolicy: String,
});

const companyDetail = mongoose.model("detail", companySchema);

module.exports = companyDetail;