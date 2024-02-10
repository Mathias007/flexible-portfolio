import { render, screen } from "@testing-library/react";
import { Home } from "..";

test("renders Home component correctly", () => {
    render(<Home />);
    const homeComponent = screen.getByTestId("home-section");
    expect(homeComponent).toBeInTheDocument();
});
