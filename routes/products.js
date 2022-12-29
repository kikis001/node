const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    products: [
      { name: "John", age: 20 },
      { name: "Jane", age: 21 },
      { name: "Bob", age: 22 }
    ]
  });
});
