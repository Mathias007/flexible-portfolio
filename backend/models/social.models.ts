import mongoose from "mongoose";

export interface ISocialData {
    id: number;
    type: string;
    link: string;
}

const SocialDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    type: { type: String, required: true },
    link: { type: String, required: true },
});

const SocialDataModel = mongoose.model<ISocialData>(
    "SocialData",
    SocialDataSchema
);

export default SocialDataModel;
