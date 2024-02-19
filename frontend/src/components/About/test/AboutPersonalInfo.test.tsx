import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AboutPersonalInfo } from "..";
import { personalModels } from "../../../config/models";

test("renders the AboutPersonalInfo component correctly", () => {
    const personalData:personalModels.IPersonalData[] = [
        { _id: 1, label: "Label 1", value: "Value 1", link: "Link 1" },
        { _id: 2, label: "Label 2", value: "Value 2", link: "Link 2" }
    ];

    render(
        <MemoryRouter>
            <AboutPersonalInfo personalData={personalData} />
        </MemoryRouter>
    );

    const aboutPersonalInfoElement = screen.getByTestId("about-personal-info");
    expect(aboutPersonalInfoElement).toBeInTheDocument();

    const personalInfoItems = screen.getAllByTestId("personal-info-item");

    expect(personalInfoItems.length).toBeGreaterThan(0);
});
