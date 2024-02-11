import { Request, Response } from "express";
import { ServicesModels } from "../models";

class ServicesController {
    getServicesData = async (req: Request, res: Response) => {
        const servicesData: ServicesModels.IServicesData[] = [
            {
                id: 0,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "smartphone",
            },
            {
                id: 1,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "computer",
            },
            {
                id: 2,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "palette",
            },
            {
                id: 3,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "search",
            },
            {
                id: 4,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "design-services",
            },
            {
                id: 5,
                title: "Web Design",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                icon: "design-services",
            },
        ];
        res.json(servicesData);
    };
}

export default ServicesController;
