import { Request, Response } from "express";
import { TimelineService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

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
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default TimelineController;
