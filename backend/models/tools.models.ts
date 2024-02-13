import mongoose from "mongoose";

export interface IToolsData {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const ToolsDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
});

const ToolsDataModel = mongoose.model<IToolsData>("ToolsData", ToolsDataSchema);

export default ToolsDataModel;
