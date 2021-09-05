import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import userModal from "./Modals/userModal.js";

// app config
const app = express();
const port = process.env.PORT || 9000;
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

// mongodb config
const connection__url = `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@cluster0.oylbp.mongodb.net/storedb?retryWrites=true&w=majority`;

mongoose.connect(connection__url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api endpoints
app.get("/", (req, res) => {
  res.send("api working");
});

app.post("/api/v1/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModal.findOne({
      email,
    });

    if (!existingUser) {
      res.status(404).json({
        message: "User Don't Exist.",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      result: existingUser,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/api/v1/signup", async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    let existingUser = await userModal.findOne({
      email,
    });

    if (existingUser) {
      res.status(400).json({
        message: "User Already Exist.",
      });
    } else if (password != confirmPassword) {
      res.status(400).json({
        message: "Password dont match",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await userModal.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    console.log(result);

    const token = await jwt.sign(
      {
        name: result.name,
        id: result._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      result,
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/api/v1/findAllUsers", (req, res) => {
  userModal.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.delete("/api/v1/deleteAllUsers", (req, res) => {
  userModal.remove((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/api/v1/findAllProducts", (req, res) => {
  res.send("products found");
});

app.post("/api/v1/createProduct", authMiddleware, (req, res) => {
  res.send("products created");
});

app.patch("/api/v1/updateProduct", authMiddleware, (req, res) => {
  res.send("products updated");
});

app.delete("/api/v1/deleteProduct", authMiddleware, (req, res) => {
  res.send("products deleted");
});

// listner
app.listen(port, () => {
  console.log("api");
});
