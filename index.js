const express = require('express'); //pakage
// const data =  require('./data');
const app = express()  //function
const bodyParser=require('body-parser') 
const mongoose= require('mongoose')
const detailRoutes= require('./routes/companyDetailRoute')
const userRoutes=require('./routes/usersRoutes')

const cors=require("cors")
app.use(cors());
app.use(express.json());
// app.get("/user",(req,res)=>{
//     res.send("hello jkworld")
// })
mongoose.connect("mongodb+srv://guptaansh912:guptaansh912@cluster0.kc57p0u.mongodb.net/E-com?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("connected to database")

    })
    .catch((err)=>{
        console.log("failed to connect" , err)
    })


app.use("/" , detailRoutes )
app.use("/",userRoutes)


app.listen(3000,()=>{
    console.log("port to localhost:3000 ")
})