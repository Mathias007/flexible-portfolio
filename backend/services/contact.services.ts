import { ContactDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { ContactCollection } = DatabaseNames;

class ContactService {
    async getContactInfoData() {
        try {
            const contactInfoData = await ContactDataModel.find({});
            return contactInfoData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(ContactCollection));
        }
    }
}

export default ContactService;
