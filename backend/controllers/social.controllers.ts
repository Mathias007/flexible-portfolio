import { Request, Response } from "express";
import { SocialModels } from "../models";

class SocialController {
    getSocialMediata = async (req: Request, res: Response) => {
        const socialData: SocialModels.ISocialData[] = [
            { id: 0, type: "facebook", link: "#" },
            { id: 1, type: "twitter", link: "#" },
            { id: 2, type: "instagram", link: "#" },
            { id: 3, type: "youtube", link: "#" },
            { id: 4, type: "linkedin", link: "#" },
            { id: 5, type: "github", link: "#" },
        ];

        res.json(socialData);
    };
}

export default SocialController;
