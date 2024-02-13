import { SocialDataModel } from "../models";
import { SocialService } from "../services";
import { SocialUtils } from "./utils";

const { mockSocialData } = SocialUtils;

jest.mock("../models/social.models.ts");

describe("SocialService", () => {
    let socialService: SocialService;

    beforeEach(() => {
        socialService = new SocialService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getSocialData", () => {
        it("should return social data from the database", async () => {
            (SocialDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockSocialData
            );

            const result = await socialService.getSocialData();

            expect(result).toEqual(mockSocialData);

            expect(SocialDataModel.find).toHaveBeenCalledTimes(1);
            expect(SocialDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if a database operation fails", async () => {
            (SocialDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(socialService.getSocialData()).rejects.toThrow(
                "Failed to fetch social data"
            );

            expect(SocialDataModel.find).toHaveBeenCalledTimes(1);
            expect(SocialDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
