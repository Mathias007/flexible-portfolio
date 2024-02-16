import { render, screen } from "@testing-library/react";
import { TimelineItem } from "..";

import { timelineModels } from "../../../models";

const mockTimelineData: timelineModels.ITimelineData = {
    _id: 1,
    title: "Test Title",
    description: "Test Description",
    type: "test",
    icon: "computer",
    date: "2022-01-01",
};

test("renders the TimelineItem component correctly", () => {
    render(
        <TimelineItem
            _id={mockTimelineData._id}
            title={mockTimelineData.title}
            type={mockTimelineData.type}
            description={mockTimelineData.description}
            icon={mockTimelineData.icon}
            date={mockTimelineData.date}
        />
    );
    const timelineItemElement = screen.getByTestId("timeline-item");

    expect(timelineItemElement).toBeInTheDocument();

    const timelineTitle = screen.getByText(mockTimelineData.title);
    const timelineDescription = screen.getByText(mockTimelineData.description);
    const timelineIcon = screen.getByTestId("timeline-date");
    const timelineDate = screen.getByText(mockTimelineData.date);

    expect(timelineTitle).toBeInTheDocument();
    expect(timelineDescription).toBeInTheDocument();
    expect(timelineIcon).toBeInTheDocument();
    expect(timelineDate).toBeInTheDocument();
});
