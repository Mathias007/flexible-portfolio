import { SocialDataModel } from "../models";
import { DatabaseNames, ServerMessages } from "../config";
const { SocialCollection } = DatabaseNames;

class SocialService {
    async getSocialData() {
        try {
            const socialData = await SocialDataModel.find({});
            return socialData;
        } catch (error) {
            throw new Error(ServerMessages.FAILED_TO_FETCH(SocialCollection));
        }
    }
}

export default SocialService;
