import { render, screen } from "@testing-library/react";
import { Portfolio } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders Portfolio component correctly", () => {
    render(
        <MemoryRouter>
            <Portfolio />
        </MemoryRouter>
    );
    const portfolioSection = screen.getByTestId("portfolio-section");
    expect(portfolioSection).toBeInTheDocument();
});
