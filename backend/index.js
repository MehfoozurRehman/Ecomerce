const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const connection__url = process.env.DB_CONNECT;
mongoose.connect(
  connection__url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to db!");
  }
);

const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/products");

// middleware
app.use(express.json());

// route middleware
app.use("/api/user", authRoute);
app.use("/api/products", productRoute);

app.listen(9000, () => console.log("server up and running"));
