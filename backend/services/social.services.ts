import { SocialDataModel } from "../models";

class SocialService {
    async getSocialData() {
        try {
            const socialData = await SocialDataModel.find({});
            return socialData;
        } catch (error) {
            throw new Error("Failed to fetch social data");
        }
    }
}

export default SocialService;
