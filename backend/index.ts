import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import router from "./routes";

dotenv.config();
const app = express();
const port = Number(process.env.SERVER_PORT);

const corsOptions = {
    origin: process.env.CLIENT_URL,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
