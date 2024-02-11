import { render, screen } from "@testing-library/react";
import { HomeSubHeader } from "..";

test("renders HomeSubHeader component correctly", () => {
    render(<HomeSubHeader />);
    const homeSubHeader = screen.getByTestId("home-sub-header");
    expect(homeSubHeader).toBeInTheDocument();
});
