import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { PortfolioCollection } = DatabaseNames;

export interface IPortfolioData extends Document {
    logo: string;
    description: string;
}

const PortfolioDataSchema = new Schema({
    logo: { type: String, required: true },
    description: { type: String, required: true },
});

const PortfolioDataModel = model<IPortfolioData>(
    PortfolioCollection,
    PortfolioDataSchema,
    PortfolioCollection
);

export default PortfolioDataModel;
