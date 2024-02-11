import { render, screen } from "@testing-library/react";
import { ServicesItem } from "..";

import { IServicesData } from "../../../data/services.data";

const sampleProps: IServicesData = {
    id: 1,
    title: "Web Design",
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
