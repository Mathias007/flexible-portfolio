import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomeActions } from "..";

test("renders HomeActions component correctly", () => {
    render(
        <MemoryRouter>
            <HomeActions />
        </MemoryRouter>
    );
    const homeActions = screen.getByTestId("home-actions");
    expect(homeActions).toBeInTheDocument();
});
