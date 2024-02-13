import { Request, Response } from "express";
import { PortfolioService } from "../services";

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
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default PortfolioController;
