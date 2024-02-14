import { PortfolioDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { PortfolioCollection } = DatabaseNames;

class PoerfolioService {
    async getPortfolioData() {
        try {
            const portfolioData = await PortfolioDataModel.find({});
            return portfolioData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(PortfolioCollection));
        }
    }
}

export default PoerfolioService;
