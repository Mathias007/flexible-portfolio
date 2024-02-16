import { render, screen } from "@testing-library/react";
import { TimelineSection } from "..";

import { timelineModels } from "../../../models";

const mockTimelineData: timelineModels.ITimelineData[] = [
    {
        _id: 1,
        title: "Test Title 1",
        description: "Test Description 1",
        type: "test",
        icon: "computer",
        date: "2022-01-01",
    },
    {
        _id: 2,
        title: "Test Title 2",
        description: "Test Description 2",
        type: "test",
        icon: "smartphone",
        date: "2022-02-02",
    },
];

test("renders the TimelineSection component correctly", () => {
    render(
        <TimelineSection
            header="Test Header"
            data={mockTimelineData}
            className="test-timeline"
        />
    );

    const aboutTimelineElement = screen.getByTestId("about-timeline");
    expect(aboutTimelineElement).toBeInTheDocument();

    const timelineHeader = screen.getByTestId("timeline-header");
    const timelineItems = screen.getAllByTestId("timeline-item");

    expect(timelineHeader).toBeInTheDocument();
    expect(timelineItems.length).toBe(mockTimelineData.length);
});
