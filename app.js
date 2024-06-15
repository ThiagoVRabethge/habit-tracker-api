import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Login, Register } from "./controllers/authentication.js";
import { AddUsersHabits, GetUserHabits } from "./controllers/userHabits.js";

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", Register);

app.post("/login", Login);

app.get("/getUserHabits/:userId", GetUserHabits);

app.post("/addUsersHabits", AddUsersHabits);

app.listen(port, () => {
  console.log(`Habit-tracker API running on port ${port}`);
});