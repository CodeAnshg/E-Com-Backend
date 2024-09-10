// const express = require('express');
// // const data =  require('./data');
// const app = express()  //function
// const bodyParser=require('body-parser')
// const mongoose= require('mongoose')


// const userRoutes=require('./routes/usersRoutes')


// const cors=require("cors")
// app.use(cors());
// app.use(express.json());
// // app.get("/user",(req,res)=>{
// //     res.send("hello jkworld")
// // })
// mongoose
//   .connect(
//     "mongodb+srv://ajaymeena:ajaymeena@cluster0.bboba.mongodb.net/sample-db?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch((err) => {
//     console.log("failed to connect", err);
//   });






// app.listen(3000,()=>{
//     console.log("port to localhost:3000 ")
// })\


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./models/db"); // Ensure your MongoDB connection is properly set up
const AuthRouter = require("./routes/AuthRouter");
const categoryRoutes=require("./routes/categoryRoutes")
const detailRoutes= require('./routes/companyDetailRoute')

const userRoutes=require('./routes/usersRoutes')
const productRoutes=require('./routes/productRoute')


const PORT = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send("hello");
});

// Middleware
app.use(bodyParser.json()); // Corrected: bodyParser.json() is a function
app.use(cors());

app.use("/",userRoutes)

// Use auth routes
app.use("/auth", AuthRouter); // Make sure authRoutes is properly imported
app.use("/", productRoutes); // Make sure authRoutes is properly imported
app.use("/", detailRoutes);
app.use("/" , categoryRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
