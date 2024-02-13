import mongoose, { Schema, Document } from "mongoose";

export interface IContactInfoData extends Document {
    id: number;
    label: string;
    info: string;
    icon: string;
}

const ContactDataSchema: Schema = new Schema({
    id: { type: Number, required: true },
    label: { type: String, required: true },
    info: { type: String, required: true },
    icon: { type: String, required: true },
});

const ContactDataModel = mongoose.model<IContactInfoData>(
    "ContactData",
    ContactDataSchema
);

export default ContactDataModel;
