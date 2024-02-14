import { SkillsDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { SkillsCollection } = DatabaseNames;

class SkillsService {
    async getSkillsData() {
        try {
            const skillsData = await SkillsDataModel.find({});
            return skillsData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(SkillsCollection));
        }
    }
}

export default SkillsService;
