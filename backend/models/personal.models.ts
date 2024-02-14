import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { PersonalCollection } = DatabaseNames;

export interface IPersonalData extends Document {
    label: string;
    value: string;
}

const PersonalDataSchema = new Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
});

const PersonalDataModel = model<IPersonalData>(
    PersonalCollection,
    PersonalDataSchema,
    PersonalCollection
);

export default PersonalDataModel;
