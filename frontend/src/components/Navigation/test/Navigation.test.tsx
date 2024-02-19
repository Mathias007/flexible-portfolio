import { render, screen } from "@testing-library/react";
import { Navigation } from "..";
import { MemoryRouter } from "react-router-dom";

const mockNavigationData = [
    { id: 1, label: "Home", link: "home", icon: "home" },
    { id: 2, label: "About", link: "about", icon: "person" },
];

test("renders Navigation component correctly", () => {
    render(
        <MemoryRouter>
            <Navigation navigationData={mockNavigationData} />
        </MemoryRouter>
    );
    const navElement = screen.getByTestId("navigation");
    expect(navElement).toBeInTheDocument();
});

test("renders active navigation item correctly", () => {
    const activeLinkId = 2;
    const mockNavigationDataWithActiveItem = mockNavigationData.map((item) =>
        item.id === activeLinkId ? { ...item, isActive: true } : item
    );

    render(
        <MemoryRouter>
            <Navigation navigationData={mockNavigationDataWithActiveItem} />
        </MemoryRouter>
    );
    const activeNavItem = screen.getByTestId("navigation-item-2");

    expect(activeNavItem).toBeInTheDocument();
});

test("renders navigation without active item correctly", () => {
    render(
        <MemoryRouter>
            <Navigation navigationData={mockNavigationData} />
        </MemoryRouter>
    );
    const activeNavItem = screen.queryByTestId("navigation-item-active");

    expect(activeNavItem).not.toBeInTheDocument();
});
