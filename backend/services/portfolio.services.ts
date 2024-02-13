import { PortfolioDataModel } from "../models";

class PoerfolioService {
    async getPortfolioData() {
        try {
            const portfolioData = await PortfolioDataModel.find({});
            return portfolioData;
        } catch (error) {
            throw new Error("Failed to fetch portfolio data");
        }
    }
}

export default PoerfolioService;
