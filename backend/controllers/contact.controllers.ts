import { Request, Response } from "express";
import { ContactService } from "../services";

import { ServerStatuses, ServerMessages } from "../config";

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
            res.status(ServerStatuses.INTERNAL_ERROR).json({
                message: ServerMessages.INTERNAL_ERROR,
            });
        }
    };
}

export default ContactController;
