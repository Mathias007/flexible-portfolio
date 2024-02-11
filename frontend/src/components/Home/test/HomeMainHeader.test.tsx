import { render, screen } from "@testing-library/react";
import { HomeMainHeader } from "..";

test("renders HomeMainHeader component correctly", () => {
    render(<HomeMainHeader />);
    const homeMainHeader = screen.getByTestId("home-main-header");
    expect(homeMainHeader).toBeInTheDocument();
});
