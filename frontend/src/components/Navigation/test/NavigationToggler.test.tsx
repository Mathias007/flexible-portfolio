import { render, screen } from "@testing-library/react";
import { NavigationToggler } from "..";

test("renders NavigationToggler component correctly", () => {
    render(<NavigationToggler onClick={() => console.log("toggle")} />);
    const togglerElement = screen.getByTestId("navigation-toggler");

    expect(togglerElement).toBeInTheDocument();
});
