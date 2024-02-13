import { Request, Response } from "express";
import { SkillsService } from "../services";

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
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default SkillsController;
