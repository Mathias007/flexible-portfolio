import { Request, Response } from "express";
import { PortfolioModels } from "../models";

class PortfolioController {
    getPortfolioProjectsData = async (req: Request, res: Response) => {
        const portfolioData: PortfolioModels.IPortfolioData[] = [
            { id: 0, logo: "link_do_logo0", description: "project" },
            { id: 1, logo: "link_do_logo2", description: "project" },
            { id: 2, logo: "link_do_logo2", description: "project" },
            { id: 3, logo: "link_do_logo3", description: "project" },
            { id: 4, logo: "link_do_logo4", description: "project" },
            { id: 5, logo: "link_do_logo5", description: "project" },
        ];

        res.json(portfolioData);
    };
}

export default PortfolioController;
