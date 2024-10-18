const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const AuthRouter = require("./routes/AuthRouter");
const categoryRoutes = require("./routes/categoryRoutes");
const detailRoutes = require("./routes/companyDetailRoute");
const userRoutes = require("./routes/usersRoutes");
const productRoutes = require("./routes/productRoute");
const searchController = require("./routes/searchRoute");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRouter);
app.use("/", productRoutes);
app.use("/", detailRoutes);
app.use("/", categoryRoutes);
app.use("/", productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
