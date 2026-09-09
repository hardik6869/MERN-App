require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const workouts = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/v1/workouts", workouts);

const PORT = process.env.PORT || 5000;

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Listen for requests
    app.listen(PORT, () =>
      console.log(`Connected to DB & Listening on Port ${PORT}`),
    );
  })
  .catch((err) => {
    console.log("Server Error");
  });
