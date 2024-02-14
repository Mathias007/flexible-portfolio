import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { SocialCollection } = DatabaseNames;

export interface ISocialData extends Document {
    type: string;
    link: string;
}

const SocialDataSchema = new Schema({
    type: { type: String, required: true },
    link: { type: String, required: true },
});

const SocialDataModel = model<ISocialData>(
    SocialCollection,
    SocialDataSchema,
    SocialCollection
);

export default SocialDataModel;
