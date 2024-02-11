import { render, screen } from "@testing-library/react";
import { PortfolioTitle } from "..";

test("renders portfolio title", () => {
    render(<PortfolioTitle />);
    const titleElement = screen.getByTestId("portfolio-title");
    expect(titleElement).toBeInTheDocument();
});
