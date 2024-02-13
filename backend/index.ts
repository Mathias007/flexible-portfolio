import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./routes";

import { ConfigVariables } from "./config";

const { CORS_ORIGIN, CONNECTION_STRING, PORT_NUMBER } = ConfigVariables;

const app = express();

const corsOptions = {
    origin: CORS_ORIGIN,
};

mongoose.connect(CONNECTION_STRING);

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/api", router);

app.listen(PORT_NUMBER, () => {
    console.log(`Server is running on http://localhost:${PORT_NUMBER}`);
});
