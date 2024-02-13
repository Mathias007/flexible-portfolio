import dotenv from "dotenv";

dotenv.config();

const ConfigVariables = {
    CORS_ORIGIN: String(process.env.CLIENT_URL),
    CONNECTION_STRING: String(process.env.DB_CONNECTION_STRING),
    PORT_NUMBER: Number(process.env.SERVER_PORT),
};

export default ConfigVariables;
