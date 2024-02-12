import { Request, Response } from "express";
import { TimelineModels } from "../models";

class TimelineController {
    getTimelineData = async (req: Request, res: Response) => {
        const educationTimelineData: TimelineModels.ITimelineData[] = [
            {
                id: 0,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
            {
                id: 1,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
            {
                id: 2,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
        ];

        const experienceTimelineData: TimelineModels.ITimelineData[] = [
            {
                id: 0,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
            {
                id: 1,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
            {
                id: 2,
                title: "Master in Computer Science",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto ea architecto eaque iste aliquam est, sequi maiores, odit rerum repudiandae dicta magni vitae quo.",
                icon: "calendar",
                date: "2013 - 2015",
            },
        ];

        res.json({
            educationTimelineData,
            experienceTimelineData,
        });
    };
}

export default TimelineController;
