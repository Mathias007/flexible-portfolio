import { ConfigVariables } from ".";
const { PORT_NUMBER } = ConfigVariables;

const ServerMessages = {
    FAILED_TO_FETCH: (dataType: string) => `Failed to fetch ${dataType}`,
    INTERNAL_ERROR: "Internal server error",
    SERVER_START_SUCCESS: `Server is running on http://localhost:${PORT_NUMBER}`,
};

export default ServerMessages;
