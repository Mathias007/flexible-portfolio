import { render, screen } from "@testing-library/react";

import { Icon } from "..";

test("Icon renders the correct icon based on type prop", () => {
    render(<Icon type="computer" />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("data-icon", "computer");
});

test("Icon applies the correct CSS class", () => {
    render(<Icon type="location" className="custom-icon-class" />);
    const iconElement = screen.getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass("custom-icon-class");
});

test("Icon renders a default icon if the type is not found in IconsMap", () => {
    render(<Icon type="non-existent-icon" />);
    const defaultIconElement = screen.getByTestId("icon");
    expect(defaultIconElement).toBeInTheDocument();
    expect(defaultIconElement).toHaveAttribute("data-icon", "default");
});
