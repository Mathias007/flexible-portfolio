import { PortfolioDataModel } from "../models";
import { PortfolioService } from "../services";
import { PortfolioUtils } from "./utils";

const { mockPortfolioData } = PortfolioUtils;

jest.mock("../models/portfolio.models.ts");

describe("PortfolioService", () => {
    let portfolioService: PortfolioService;

    beforeEach(() => {
        portfolioService = new PortfolioService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getPortfolioData", () => {
        it("should return portfolio data from database", async () => {
            (PortfolioDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockPortfolioData
            );

            const result = await portfolioService.getPortfolioData();

            expect(result).toEqual(mockPortfolioData);

            expect(PortfolioDataModel.find).toHaveBeenCalledTimes(1);
            expect(PortfolioDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if database operation fails", async () => {
            (PortfolioDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(portfolioService.getPortfolioData()).rejects.toThrow(
                "Failed to fetch portfolio data"
            );

            expect(PortfolioDataModel.find).toHaveBeenCalledTimes(1);
            expect(PortfolioDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
