import { render, screen } from "@testing-library/react";
import { ServicesTitle } from "..";

test("renders ServicesTitle component with 'Services' text", () => {
    render(<ServicesTitle />);
    const titleElement = screen.getByText("Services");
    expect(titleElement).toBeInTheDocument();
});
