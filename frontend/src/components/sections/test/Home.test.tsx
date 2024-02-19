import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "..";

test("renders Home component correctly", () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const homeComponent = screen.getByTestId("home-section");
    expect(homeComponent).toBeInTheDocument();
});
