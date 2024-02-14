import { Request, Response } from "express";
import { PersonalService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

class PersonalController {
    private personalService: PersonalService;

    constructor(personalService: PersonalService) {
        this.personalService = personalService;
    }

    getPersonalData = async (req: Request, res: Response) => {
        try {
            const contactInfoData =
                await this.personalService.getPersonalData();

            res.json(contactInfoData);
        } catch (error) {
            console.error(error);
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default PersonalController;
