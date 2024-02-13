import { Request, Response } from "express";
import { SocialService } from "../services";

class SocialController {
    private socialService: SocialService;

    constructor(socialService: SocialService) {
        this.socialService = socialService;
    }

    getSocialMediata = async (req: Request, res: Response) => {
        try {
            const socialData = await this.socialService.getSocialData();
            res.json(socialData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default SocialController;
