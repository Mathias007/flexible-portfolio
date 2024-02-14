import { Schema, Document, model } from "mongoose";

import { DatabaseNames } from "../config";
const { TimelineCollection } = DatabaseNames;

export interface ITimelineData extends Document {
    title: string;
    type: string;
    description: string;
    icon: string;
    date: string;
}

export interface ITimelineSortedData {
    educationTimelineData: ITimelineData[];
    experienceTimelineData: ITimelineData[];
}

const TimelineSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String },
    icon: { type: String, required: true },
    date: { type: String, required: true },
});

const TimelineModel = model<ITimelineData>(
    TimelineCollection,
    TimelineSchema,
    TimelineCollection
);

export default TimelineModel;
