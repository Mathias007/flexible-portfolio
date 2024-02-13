import { Request, Response } from "express";
import { TimelineService } from "../services";

class TimelineController {
    private timelineService: TimelineService;

    constructor(timelineService: TimelineService) {
        this.timelineService = timelineService;
    }

    getTimelineData = async (req: Request, res: Response) => {
        try {
            const timelineData = await this.timelineService.getTimelineData();
            res.json(timelineData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default TimelineController;
