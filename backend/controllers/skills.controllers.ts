import { Request, Response } from "express";
import { SkillsService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

class SkillsController {
    private skillsService: SkillsService;

    constructor(skillsService: SkillsService) {
        this.skillsService = skillsService;
    }

    getSkillsData = async (req: Request, res: Response) => {
        try {
            const skillsData = await this.skillsService.getSkillsData();
            res.json(skillsData);
        } catch (error) {
            console.error(error);
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default SkillsController;
