import { Request, Response } from "express";
import { ContactModels } from "../models";

class ContactController {
    getContactInfoData = async (req: Request, res: Response) => {
        const contactInfoData: ContactModels.IContactInfoData[] = [
            { id: 0, label: "Call Us On", info: "+00 21371488", icon: "phone" },
            { id: 1, label: "Office", info: "Katowice", icon: "location" },
            {
                id: 2,
                label: "Email",
                info: "matstawowski@gmail.com",
                icon: "email",
            },
            { id: 3, label: "Website", info: "www.egildia.pl", icon: "globe" },
        ];

        res.json(contactInfoData);
    };
}

export default ContactController;
