import { ToolsDataModel } from "../models";
import { ToolsService } from "../services";
import { ToolsUtils } from "./utils";

const { mockToolsData } = ToolsUtils;

jest.mock("../models/tools.models.ts");

describe("ToolsService", () => {
    let toolsService: ToolsService;

    beforeEach(() => {
        toolsService = new ToolsService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getToolsData", () => {
        it("should return tools data from the database", async () => {
            (ToolsDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockToolsData
            );

            const result = await toolsService.getToolsData();

            expect(result).toEqual(mockToolsData);

            expect(ToolsDataModel.find).toHaveBeenCalledTimes(1);
            expect(ToolsDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if a database operation fails", async () => {
            (ToolsDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(toolsService.getToolsData()).rejects.toThrow(
                "Failed to fetch tools data"
            );

            expect(ToolsDataModel.find).toHaveBeenCalledTimes(1);
            expect(ToolsDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
