
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./models/db"); 
const AuthRouter = require("./routes/AuthRouter");
const categoryRoutes=require("./routes/categoryRoutes")
const detailRoutes= require('./routes/companyDetailRoute')

const userRoutes=require('./routes/usersRoutes')
const productRoutes=require('./routes/productRoute')


const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send("hello");
});

app.use(bodyParser.json()); 
app.use(cors());

app.use("/",userRoutes)


app.use("/auth", AuthRouter); 
app.use("/", productRoutes); 
app.use("/", detailRoutes);
app.use("/" , categoryRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
