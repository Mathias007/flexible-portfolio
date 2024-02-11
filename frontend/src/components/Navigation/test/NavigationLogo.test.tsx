import { render, screen } from "@testing-library/react";
import { NavigationLogo } from "..";

test("renders NavigationLogo component correctly", () => {
    render(<NavigationLogo />);
    const logoElement = screen.getByTestId("navigation-logo");

    expect(logoElement).toBeInTheDocument();
});
