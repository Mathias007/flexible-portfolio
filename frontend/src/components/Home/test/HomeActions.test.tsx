import { render, screen } from "@testing-library/react";
import { HomeActions } from "..";

test("renders HomeActions component correctly", () => {
    render(<HomeActions />);
    const homeActions = screen.getByTestId("home-actions");
    expect(homeActions).toBeInTheDocument();
});
