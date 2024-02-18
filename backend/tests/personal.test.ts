import { PersonalService } from "../services";
import { PersonalDataModel } from "../models";
import { PersonalUtils } from "./utils";

const { mockPersonalData } = PersonalUtils;

jest.mock("../models/personal.models.ts");

describe("PersonalService", () => {
    let personalService: PersonalService;

    beforeEach(() => {
        personalService = new PersonalService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getPersonalData", () => {
        it("should return personal data from database", async () => {
            (PersonalDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockPersonalData
            );

            const result = await personalService.getPersonalData();

            expect(result).toEqual(mockPersonalData);
            expect(PersonalDataModel.find).toHaveBeenCalledTimes(1);
            expect(PersonalDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if database operation fails", async () => {
            (PersonalDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(personalService.getPersonalData()).rejects.toThrow(
                "Failed to fetch PersonalData"
            );
            expect(PersonalDataModel.find).toHaveBeenCalledTimes(1);
            expect(PersonalDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
