const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./models/db"); 
const AuthRouter = require("./routes/AuthRouter");
const categoryRoutes = require("./routes/categoryRoutes");
const detailRoutes = require("./routes/companyDetailRoute");
const userRoutes = require("./routes/usersRoutes");
const productRoutes = require("./routes/productRoute");
const searchController=require("./routes/searchRoute")
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json()); 
app.use(cors());



app.use("/auth", AuthRouter); 
app.use("/", productRoutes); 
app.use("/", detailRoutes);
app.use("/" , categoryRoutes);

app.use("/api/products", productRoutes); 
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
