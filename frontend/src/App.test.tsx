import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
    render(<App />);

    const appElement = screen.getByTestId("app");
    expect(appElement).toBeInTheDocument();
});

test("toggles dark mode", () => {
    render(<App />);

    const toggleButton = screen.getByTestId("day-night");

    const body = screen.getByTestId("app");
    expect(body).toHaveClass("dark");

    fireEvent.click(toggleButton);

    expect(body).not.toHaveClass("dark");

    fireEvent.click(toggleButton);

    expect(body).toHaveClass("dark");
});
