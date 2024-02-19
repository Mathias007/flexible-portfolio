import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PortfolioContent } from "..";
import { vi } from 'vitest';

global.fetch = vi.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([
            { id: 1, logo: "logo1.jpg", description: "Project 1" },
            { id: 2, logo: "logo2.jpg", description: "Project 2" },
        ]), 
    } as Response)
);

const mockPortfolioData = [
    { id: 1, logo: "logo1.jpg", description: "Project 1" },
    { id: 2, logo: "logo2.jpg", description: "Project 2" },
];

test("renders portfolio content with mock data", async () => {
    render(
        <MemoryRouter>
            <PortfolioContent portfolioData={mockPortfolioData} />
        </MemoryRouter>
    );

    const portfolioItems = await waitFor(() => screen.queryAllByTestId("portfolio-item"));

    expect(portfolioItems).toHaveLength(mockPortfolioData.length);
});
