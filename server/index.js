import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Initialising Express
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Setting up the routes using router module
import workoutRoutes from "./routes/activities.js";
import userRoutes from "./routes/users.js";
app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 5000;

// Mongo standard connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
