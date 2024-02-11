import { render, screen } from "@testing-library/react";
import { PortfolioContent } from "..";

const mockPortfolioData = [
    { id: 1, logo: "logo1.jpg", description: "Project 1" },
    { id: 2, logo: "logo2.jpg", description: "Project 2" },
];

test("renders portfolio content with mock data", () => {
    render(<PortfolioContent portfolioData={mockPortfolioData} />);
    const portfolioItems = screen.getAllByTestId("portfolio-item");
    expect(portfolioItems).toHaveLength(mockPortfolioData.length);
});
