import { SkillsDataModel } from "../models";

class SkillsService {
    async getSkillsData() {
        try {
            const skillsData = await SkillsDataModel.find({});
            return skillsData;
        } catch (error) {
            throw new Error("Failed to fetch skills data");
        }
    }
}

export default SkillsService;
