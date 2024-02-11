import { render, screen } from "@testing-library/react";
import { PortfolioItem } from "..";

test("renders portfolio item correctly", () => {
    const logo = "logo.jpg";
    const description = "Sample Description";

    render(<PortfolioItem logo={logo} description={description} />);

    const portfolioItem = screen.getByTestId("portfolio-item");
    const portfolioImage = screen.getByAltText(description);

    expect(portfolioItem).toBeInTheDocument();
    expect(portfolioImage).toBeInTheDocument();
    expect(portfolioImage).toHaveAttribute("src", logo);
    expect(portfolioImage).toHaveAttribute("alt", description);
});
