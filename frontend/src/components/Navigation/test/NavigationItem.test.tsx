import { render, screen, fireEvent } from "@testing-library/react";
import { NavigationItem } from "..";

import { vi } from "vitest";

const mockNavigationItem = {
    id: 1,
    label: "Home",
    link: "home",
    icon: "home",
    isActive: false,
    onItemClick: vi.fn()
};

test("renders NavigationItem component correctly", () => {
    render(<NavigationItem {...mockNavigationItem} />);
    const navigationItem = screen.getByTestId("navigation-item-1");

    expect(navigationItem).toBeInTheDocument();
});

test("renders active NavigationItem component correctly", () => {
    const mockActiveItem = { ...mockNavigationItem, isActive: true };
    render(<NavigationItem {...mockActiveItem} />);
    const navigationLink = screen.getByTestId("navigation-link-1");

    expect(navigationLink).toHaveClass("active");
});

test("handles click correctly", () => {
    render(<NavigationItem {...mockNavigationItem} />);
    const navigationItem = screen.getByTestId("navigation-item-1");

    fireEvent.click(navigationItem);

    expect(mockNavigationItem.onItemClick).toHaveBeenCalledTimes(1);
});
