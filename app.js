import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { Login, Register } from "./controllers/authentication.js";

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", Register);

app.post("/login", Login);

app.listen(port, () => {
  console.log(`Example api running on ${port}`);
});