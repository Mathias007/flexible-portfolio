import { Request, Response } from "express";
import { PortfolioService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

class PortfolioController {
    private portfolioService: PortfolioService;

    constructor(portfolioService: PortfolioService) {
        this.portfolioService = portfolioService;
    }

    getPortfolioProjectsData = async (req: Request, res: Response) => {
        try {
            const portfolioData =
                await this.portfolioService.getPortfolioData();
            res.json(portfolioData);
        } catch (error) {
            console.error(error);
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default PortfolioController;
