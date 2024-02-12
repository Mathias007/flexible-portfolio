import { Request, Response } from "express";
import { PersonalModels } from "../models";

class PersonalController {
    getPersonalData = async (req: Request, res: Response) => {
        const personalData: PersonalModels.IPersonalData[] = [
            { id: 0, label: "Birthday", value: "24 may 1995" },
            { id: 1, label: "Age", value: "28" },
            { id: 2, label: "Website", value: "www.egildia.pl" },
            { id: 3, label: "Email", value: "matstawowski@gmail.com" },
            { id: 4, label: "Degree", value: "CS" },
            { id: 5, label: "Phone", value: "21 37 00 00" },
            { id: 6, label: "City", value: "Katowice" },
            { id: 7, label: "Freelance", value: "Available" },
        ];

        res.json(personalData);
    };
}

export default PersonalController;
