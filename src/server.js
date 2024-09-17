import express from "express";
import cors from "cors";
import { petRouter } from "./routes/findmypet.routes.js";
import connectDB from "./database/connection.db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsConfig));
app.use(express.json());

app.use(petRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
