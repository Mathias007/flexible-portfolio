import { render, screen } from "@testing-library/react";
import { AboutPersonalInfo } from "..";
import { personalModels } from "../../../models";

test("renders the AboutPersonalInfo component correctly", () => {
    render(<AboutPersonalInfo personalData={{} as personalModels.IPersonalData[]} />);

    const aboutPersonalInfoElement = screen.getByTestId("about-personal-info");
    expect(aboutPersonalInfoElement).toBeInTheDocument();

    const personalInfoItems = screen.getAllByTestId("personal-info-item");

    expect(personalInfoItems.length).toBeGreaterThan(0);
});
