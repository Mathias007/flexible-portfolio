import { render, screen } from "@testing-library/react";
import { HomeDescription } from "..";

test("renders HomeDescription component correctly", () => {
    render(<HomeDescription />);
    const homeDescription = screen.getByTestId("home-description");
    expect(homeDescription).toBeInTheDocument();
});
