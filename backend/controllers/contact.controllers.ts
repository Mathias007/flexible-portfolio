import { Request, Response } from "express";
import { ContactService } from "../services";
class ContactController {
    private contactService: ContactService;

    constructor(contactService: ContactService) {
        this.contactService = contactService;
    }

    getContactInfoData = async (req: Request, res: Response) => {
        try {
            const contactInfoData =
                await this.contactService.getContactInfoData();
            res.json(contactInfoData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal server error" });
        }
    };
}

export default ContactController;
