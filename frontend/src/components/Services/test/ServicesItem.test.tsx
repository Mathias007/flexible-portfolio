import { render, screen } from "@testing-library/react";
import { ServicesItem } from "..";

import { toolsModels } from "../../../config/models";

const sampleProps: toolsModels.IToolsData = {
    _id: 1,
    title: "Web Design",
    technologies: ["first", "second"],
    description: "Lorem ipsum dolor sit amet",
    icon: "sample-icon",
};

test("renders ServicesItem component with correct properties", () => {
    render(<ServicesItem {...sampleProps} />);
    const titleElement = screen.getByText(sampleProps.title);
    const descriptionElement = screen.getByText(sampleProps.description);
    const iconElement = screen.getByTestId("services-item-icon");

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
});
