import { Request, Response } from "express";
import { ToolsService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

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
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default ToolsController;
