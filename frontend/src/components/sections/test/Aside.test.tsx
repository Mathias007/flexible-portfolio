import { render, screen } from "@testing-library/react";
import { Aside } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders Aside component correctly", () => {
    render(
        <MemoryRouter>
            <Aside />
        </MemoryRouter>
    );
    const asideElement = screen.getByTestId("aside-section");
    expect(asideElement).toBeInTheDocument();
});
