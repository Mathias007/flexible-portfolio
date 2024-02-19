import { render, screen } from "@testing-library/react";
import { NavigationLogo } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders NavigationLogo component correctly", () => {
    render(
        <MemoryRouter>
            <NavigationLogo />
        </MemoryRouter>
    );
    const logoElement = screen.getByTestId("navigation-logo");

    expect(logoElement).toBeInTheDocument();
});
