const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ success: true, msg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ success: true, msg: "Get single workouts" });
});

router.post("/", (req, res) => {
  res.json({ success: true, msg: "Create workouts" });
});

router.delete("/:id", (req, res) => {
  res.json({ success: true, msg: "Delete workouts" });
});

router.patch("/:id", (req, res) => {
  res.json({ success: true, msg: "Update workouts" });
});

module.exports = router;
