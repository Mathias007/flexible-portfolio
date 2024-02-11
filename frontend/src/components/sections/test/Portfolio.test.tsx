import { render, screen } from "@testing-library/react";
import { Portfolio } from "..";

test("renders Portfolio component correctly", () => {
    render(<Portfolio />);
    const portfolioSection = screen.getByTestId("portfolio-section");
    expect(portfolioSection).toBeInTheDocument();
});
