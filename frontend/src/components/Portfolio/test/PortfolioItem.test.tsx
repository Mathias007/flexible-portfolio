import { render, screen } from "@testing-library/react";
import { PortfolioItem } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders portfolio item correctly", () => {
    // const logo = "logo.jpg";
    // const description = "Sample Description";

    const projectMockData = {
        html_url: "https://test.pl",
        language: "JavaScript",
        name: "Sample Project",
        description: "Test Project Descrption",
    };

    render(
        <MemoryRouter>
            <PortfolioItem
                html_url={projectMockData.html_url}
                language={projectMockData.language}
                name={projectMockData.name}
                description={projectMockData.description}
            />
        </MemoryRouter>
    );

    const portfolioItem = screen.getByTestId("portfolio-item");
    // const portfolioImage = screen.getByAltText(description);

    expect(portfolioItem).toBeInTheDocument();
    // expect(portfolioImage).toBeInTheDocument();
    // expect(portfolioImage).toHaveAttribute("src", logo);
    // expect(portfolioImage).toHaveAttribute("alt", description);
});
