import mongoose from "mongoose";

export interface ISkillsData {
    id: number;
    skill: string;
    value: number;
}

const SkillsDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    skill: { type: String, required: true },
    value: { type: Number, required: true },
});

const SkillsDataModel = mongoose.model<ISkillsData>(
    "SkillsData",
    SkillsDataSchema
);

export default SkillsDataModel;
