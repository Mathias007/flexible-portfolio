import { render, screen } from "@testing-library/react";
import { PortfolioHeading } from "..";

test("renders portfolio heading", () => {
    render(<PortfolioHeading />);
    const headingElement = screen.getByTestId("portfolio-heading");
    expect(headingElement).toBeInTheDocument();
});
