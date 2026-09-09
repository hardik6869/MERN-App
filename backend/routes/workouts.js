const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ success: true, msg: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ success: true, msg: "Get single workouts" });
});

router.post("/", async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res
      .status(200)
      .json({ success: true, data: workout, msg: "Create workouts" });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.json({ success: true, msg: "Delete workouts" });
});

router.patch("/:id", (req, res) => {
  res.json({ success: true, msg: "Update workouts" });
});

module.exports = router;
