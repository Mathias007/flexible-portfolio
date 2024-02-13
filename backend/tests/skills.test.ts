import { SkillsDataModel } from "../models";
import { SkillsService } from "../services";
import { SkillsUtils } from "./utils";

const { mockSkillsData } = SkillsUtils;

jest.mock("../models/skills.models.ts");

describe("SkillsService", () => {
    let skillsService: SkillsService;

    beforeEach(() => {
        skillsService = new SkillsService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getSkillsData", () => {
        it("should return skills data from database", async () => {
            (SkillsDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockSkillsData
            );

            const result = await skillsService.getSkillsData();

            expect(result).toEqual(mockSkillsData);

            expect(SkillsDataModel.find).toHaveBeenCalledTimes(1);
            expect(SkillsDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if database operation fails", async () => {
            (SkillsDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(skillsService.getSkillsData()).rejects.toThrow(
                "Failed to fetch skills data"
            );

            expect(SkillsDataModel.find).toHaveBeenCalledTimes(1);
            expect(SkillsDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
