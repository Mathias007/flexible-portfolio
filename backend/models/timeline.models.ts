import mongoose from "mongoose";

export interface ITimelineData {
    id: number;
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

const TimelineSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    date: { type: String, required: true },
});

const TimelineModel = mongoose.model<ITimelineData>(
    "TimelineData",
    TimelineSchema
);

export default TimelineModel;
