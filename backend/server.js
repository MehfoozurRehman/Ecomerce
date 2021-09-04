import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use(cors());

// mongodb config
const connection__url = "";

// api endpoints
app.get("/", (req, res) => {
  res.send("api working");
});

// listner
app.listen(port, () => {
  console.log("api");
});
