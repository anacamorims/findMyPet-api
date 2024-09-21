import express from "express";
import cors from "cors";
import { petRouter } from "./routes/findmypet.routes.js";
import { Mongo } from "./database/connection.db.js";
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




async function startServer() {
    const mongoConnectionResult = await Mongo.connect();

    if (mongoConnectionResult.success) {
        console.log('Database connection successful, starting server...');
        app.listen(port, () => console.log(`Server running on port ${port}`))
    } else {
        console.error('Failed to connect to the database:', mongoConnectionResult.error);
    }
}

startServer();
