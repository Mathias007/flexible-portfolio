import { Request, Response } from "express";
import { SocialService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

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
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default SocialController;
