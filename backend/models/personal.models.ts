import mongoose from "mongoose";

export interface IPersonalData {
    id: number;
    label: string;
    value: string;
}

const PersonalDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    label: { type: String, required: true },
    value: { type: String, required: true },
});

const PersonalDataModel = mongoose.model<IPersonalData>(
    "PersonalData",
    PersonalDataSchema
);

export default PersonalDataModel;
