import { render, screen } from "@testing-library/react";
import { AboutTitle } from "..";

test("renders about title", () => {
    render(<AboutTitle />);
    const titleElement = screen.getByTestId("about-title");
    expect(titleElement).toBeInTheDocument();
});
