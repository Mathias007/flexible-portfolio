import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { ContactCollection } = DatabaseNames;

export interface IContactInfoData extends Document {
    label: string;
    info: string;
    link?: string;
    icon: string;
}

const ContactDataSchema: Schema = new Schema({
    label: { type: String, required: true },
    info: { type: String, required: true },
    link: { type: String },
    icon: { type: String, required: true },
});

const ContactDataModel = model<IContactInfoData>(
    ContactCollection,
    ContactDataSchema,
    ContactCollection
);

export default ContactDataModel;
