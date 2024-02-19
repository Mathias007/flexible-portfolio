import { render, screen } from "@testing-library/react";
import { AboutDescription } from "..";

test("renders the AboutDescription component correctly", () => {
    render(<AboutDescription />);

    const aboutDescriptionElement = screen.getByTestId("about-description");
    expect(aboutDescriptionElement).toBeInTheDocument();

    const header = screen.getByTestId("description-header");
    const span = screen.getByTestId("description-span");
    const paragraphArray = screen.getAllByTestId("description-paragraph");

    expect(header).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(paragraphArray).toHaveLength(3);
});
