import { Request, Response } from "express";
import { ToolsService } from "../services";

class ToolsController {
    private toolsService: ToolsService;

    constructor(toolsService: ToolsService) {
        this.toolsService = toolsService;
    }

    getServicesData = async (req: Request, res: Response) => {
        try {
            const toolsData = await this.toolsService.getToolsData();
            res.json(toolsData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default ToolsController;
