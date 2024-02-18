import { TimelineDataModel } from "../models";
import { TimelineService } from "../services";
import { TimelineUtils } from "./utils";

const { mockTimelineData, mockTimelineSortedData } = TimelineUtils;

jest.mock("../models/timeline.models.ts");

describe("TimelineService", () => {
    let timelineService: TimelineService;

    beforeEach(() => {
        timelineService = new TimelineService();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getTimelineData", () => {
        it("should return timeline data from the database", async () => {
            (TimelineDataModel.find as jest.Mock).mockResolvedValueOnce(
                mockTimelineData
            );

            const result = await timelineService.getTimelineData();

            expect(result).toEqual(mockTimelineSortedData);

            expect(TimelineDataModel.find).toHaveBeenCalledTimes(1);
            expect(TimelineDataModel.find).toHaveBeenCalledWith({});
        });

        it("should throw an error if a database operation fails", async () => {
            (TimelineDataModel.find as jest.Mock).mockRejectedValueOnce(
                new Error("Database error")
            );

            await expect(timelineService.getTimelineData()).rejects.toThrow(
                "Failed to fetch TimelineData"
            );

            expect(TimelineDataModel.find).toHaveBeenCalledTimes(1);
            expect(TimelineDataModel.find).toHaveBeenCalledWith({});
        });
    });
});
