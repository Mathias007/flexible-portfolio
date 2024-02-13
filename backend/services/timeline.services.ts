import { TimelineDataModel, TimelineModels } from "../models";

class TimelineService {
    async getTimelineData() {
        try {
            const timelineData = await TimelineDataModel.find({});

            const educationTimelineData: TimelineModels.ITimelineData[] = [];
            const experienceTimelineData: TimelineModels.ITimelineData[] = [];

            for (const item of timelineData) {
                if (item.type === "education") {
                    educationTimelineData.push(item);
                } else if (item.type === "experience") {
                    experienceTimelineData.push(item);
                }
            }

            return { educationTimelineData, experienceTimelineData };
        } catch (error) {
            throw new Error("Failed to fetch timeline data");
        }
    }
}

export default TimelineService;
