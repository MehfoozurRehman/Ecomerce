const router = require("express").Router();
const User = require("../Model/User");
const { loginValidation, registerValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  //data validate
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(res.send(error.details[0].message));
  }

  // user redundency
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    res.status(400).send("Email already exist");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  //data validate
  const { error } = await loginValidation(req.body);
  if (error) {
    return res.status(400).send(res.send(error.details[0].message));
  }

  // user match
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send("User Doesn't exist");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  // password match
  if (!validPassword) {
    res.status(400).send("Invalid Password");
  }

  // create a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  console.log(token);

  // res.send("Login");
});
module.exports = router;
