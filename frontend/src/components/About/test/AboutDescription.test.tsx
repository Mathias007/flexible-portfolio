import { render, screen } from "@testing-library/react";
import { AboutDescription } from "..";

test("renders the AboutDescription component correctly", () => {
    render(<AboutDescription />);

    const aboutDescriptionElement = screen.getByTestId("about-description");
    expect(aboutDescriptionElement).toBeInTheDocument();

    const header = screen.getByTestId("description-header");
    const span = screen.getByTestId("description-span");
    const paragraph = screen.getByTestId("description-paragraph");

    expect(header).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
});
