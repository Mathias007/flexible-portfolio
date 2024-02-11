import { render, screen } from "@testing-library/react";
import { Aside } from "..";

test("renders Aside component correctly", () => {
    render(<Aside />);
    const asideElement = screen.getByTestId("aside-section");
    expect(asideElement).toBeInTheDocument();
});
