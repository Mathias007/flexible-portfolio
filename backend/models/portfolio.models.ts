import mongoose from "mongoose";

export interface IPortfolioData {
    id: number;
    logo: string;
    description: string;
}

const PortfolioDataSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    logo: { type: String, required: true },
    description: { type: String, required: true },
});

const PortfolioDataModel = mongoose.model<IPortfolioData>(
    "PortfolioData",
    PortfolioDataSchema
);

export default PortfolioDataModel;
