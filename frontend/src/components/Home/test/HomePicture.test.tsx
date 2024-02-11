import { render, screen } from "@testing-library/react";
import { HomePicture } from "..";

test("renders HomePicture component correctly", () => {
    render(<HomePicture />);
    const homePicture = screen.getByTestId("home-picture");
    expect(homePicture).toBeInTheDocument();
});
