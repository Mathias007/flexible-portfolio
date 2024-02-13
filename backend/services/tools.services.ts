import { ToolsDataModel } from "../models";

class ToolsService {
    async getToolsData() {
        try {
            const toolsData = await ToolsDataModel.find({});
            return toolsData;
        } catch (error) {
            throw new Error("Failed to fetch tools data");
        }
    }
}

export default ToolsService;
