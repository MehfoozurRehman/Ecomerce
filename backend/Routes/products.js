const router = require("express").Router();
const verifyToken = require("./verifyToken");

router.get("/", verifyToken, (req, res) => {
  res.json({
    products: {
      title: "post title",
      description: "post description",
    },
  });
});

module.exports = router;
