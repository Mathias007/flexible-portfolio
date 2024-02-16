import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { ToolsCollection } = DatabaseNames;

export interface IToolsData extends Document {
    title: string;
    description: string;
    technologies: string[];
    icon: string;
}

const ToolsDataSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: Array<String>, required: true, },
    icon: { type: String, required: true },
});

const ToolsDataModel = model<IToolsData>(
    ToolsCollection,
    ToolsDataSchema,
    ToolsCollection
);

export default ToolsDataModel;
