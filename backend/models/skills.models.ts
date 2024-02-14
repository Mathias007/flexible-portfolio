import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { SkillsCollection } = DatabaseNames;

export interface ISkillsData extends Document {
    skill: string;
    value: number;
}

const SkillsDataSchema = new Schema({
    skill: { type: String, required: true },
    value: { type: Number, required: true },
});

const SkillsDataModel = model<ISkillsData>(
    SkillsCollection,
    SkillsDataSchema,
    SkillsCollection
);

export default SkillsDataModel;
