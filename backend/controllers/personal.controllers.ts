import { Request, Response } from "express";
import { PersonalService } from "../services";

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
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default PersonalController;
