import { PersonalDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { PersonalCollection } = DatabaseNames;

class PersonalService {
    async getPersonalData() {
        try {
            const personalData = await PersonalDataModel.find({});
            return personalData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(PersonalCollection));
        }
    }
}

export default PersonalService;
