import { vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import StyleSwitcher from "../StyleSwitcher";

describe("StyleSwitcher component", () => {
    it("should toggle color menu when the toggler is clicked", () => {
        render(<StyleSwitcher isDarkMode={false} toggleDarkMode={() => {}} />);

        const toggler = screen.getByTestId("style-switcher-toggler");

        const colorMenu = screen.getByTestId("style-switcher");
        expect(colorMenu.classList.contains("open")).toBe(false);

        fireEvent.click(toggler);

        expect(colorMenu.classList.contains("open")).toBe(true);
    });

    it("should change the style when a color option is clicked", () => {
        render(<StyleSwitcher isDarkMode={false} toggleDarkMode={() => {}} />);

        const colorOption = screen.getByTestId("color-1");
        const color = "#1854b4";

        const setPropertyMock = vi.fn();
        document.documentElement.style.setProperty = setPropertyMock;

        fireEvent.click(colorOption);

        expect(setPropertyMock).toHaveBeenCalledWith("--skin-color", color);
    });

    it("should toggle dark mode when the day-night icon is clicked", () => {
        const toggleDarkModeMock = vi.fn();
        render(
            <StyleSwitcher
                isDarkMode={false}
                toggleDarkMode={toggleDarkModeMock}
            />
        );

        const dayNightIcon = screen.getByTestId("day-night");
        fireEvent.click(dayNightIcon);

        expect(toggleDarkModeMock).toHaveBeenCalled();
    });
});
