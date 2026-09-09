const express = require("express");
const dotenv = require("dotenv");

// express app
const app = express();

// routes
app.get("/", (req, res, next) => {
  res.json({ success: true, msg: "welcome to this app" });
});

const PORT = process.env.PORT || 5000;
// Listen for requests
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
