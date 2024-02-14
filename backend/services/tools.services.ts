import { ToolsDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { ToolsCollection } = DatabaseNames;

class ToolsService {
    async getToolsData() {
        try {
            const toolsData = await ToolsDataModel.find({});
            return toolsData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(ToolsCollection));
        }
    }
}

export default ToolsService;
