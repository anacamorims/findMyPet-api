import express from "express";
import { petRouter } from "./routes/findmypet.routes.js"

const app = express();
const port = 3000;

app.use(express.json());

app.use(petRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

