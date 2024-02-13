import { PersonalDataModel } from "../models";

class PersonalService {
    async getPersonalData() {
        try {
            const personalData = await PersonalDataModel.find({});
            return personalData;
        } catch (error) {
            throw new Error("Failed to fetch personal data");
        }
    }
}

export default PersonalService;
