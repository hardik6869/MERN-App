const express = require("express");
const {
  getWorkouts,
  getSingleWorkout,
  creatWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");

const router = express.Router();

router.route("/").get(getWorkouts).post(creatWorkout);
router
  .route("/:id")
  .get(getSingleWorkout)
  .delete(deleteWorkout)
  .patch(updateWorkout);

module.exports = router;
