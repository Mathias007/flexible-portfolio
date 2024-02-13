import { ContactDataModel } from "../models";

class ContactService {
    async getContactInfoData() {
        try {
            const contactInfoData = await ContactDataModel.find({});
            return contactInfoData;
        } catch (error) {
            throw new Error("Failed to fetch contact info data");
        }
    }
}

export default ContactService;
