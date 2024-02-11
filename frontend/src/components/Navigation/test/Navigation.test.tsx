import { render, screen } from "@testing-library/react";
import { Navigation } from "..";

const mockNavigationData = [
    { id: 1, label: "Home", link: "#home", icon: "home" },
    { id: 2, label: "About", link: "#about", icon: "person" },
];

test("renders Navigation component correctly", () => {
    render(<Navigation navigationData={mockNavigationData} />);
    const navElement = screen.getByTestId("navigation");
    expect(navElement).toBeInTheDocument();
});

test("renders active navigation item correctly", () => {
    const activeLinkId = 2;
    const mockNavigationDataWithActiveItem = mockNavigationData.map((item) =>
        item.id === activeLinkId ? { ...item, isActive: true } : item
    );
    
    render(<Navigation navigationData={mockNavigationDataWithActiveItem} />);
    const activeNavItem = screen.getByTestId("navigation-item-2");
    
    expect(activeNavItem).toBeInTheDocument();    
});

test("renders navigation without active item correctly", () => {
    render(<Navigation navigationData={mockNavigationData} />);
    const activeNavItem = screen.queryByTestId("navigation-item-active");

    expect(activeNavItem).not.toBeInTheDocument();
});
