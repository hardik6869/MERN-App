const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// get All Workouts
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: workouts });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

// Get Single Workout
exports.getSingleWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, msg: "No Search Workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    res.status(404).json({ success: false, msg: "No Search Workout" });
  }

  res.status(200).json({ success: true, data: workout });
};

// Create Workout
exports.creatWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res
      .status(200)
      .json({ success: true, data: workout, msg: "Create workouts" });
  } catch (error) {
    res.status(400).json({ success: false, msg: error.message });
  }
};

// Delete Workout
exports.deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, msg: "No Search Workout" });
  }
  const workout = await Workout.findByIdAndDelete({ _id: id });
  if (!workout) {
    res.status(400).json({ success: false, msg: "No Search Workout" });
  }
  res.status(200).json({ success: true, msg: "Workout Deleted" });
};

// Update Workout
exports.updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, msg: "No Search Workout" });
  }
  const workout = await Workout.findByIdAndUpdate({ _id: id }, { ...req.body });

  if (!workout) {
    res.status(400).json({ success: false, msg: "No Search Workout" });
  } 

  res
    .status(200)
    .json({ success: true, data: workout, msg: "Workout Updated" });
};
