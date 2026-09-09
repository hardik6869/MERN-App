const express = require("express");
const dotenv = require("dotenv");

const workouts = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json());

//routes
app.use("/api/v1/workouts", workouts);

const PORT = process.env.PORT || 5000;
// Listen for requests
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
