import { render, screen } from "@testing-library/react";
import { PersonalInfoButtons } from "..";
import { MemoryRouter } from "react-router-dom";

test("renders the PersonalInfoButtons component correctly", () => {
    render(
        <MemoryRouter>
            <PersonalInfoButtons />
        </MemoryRouter>
    );
    const personalInfoButtonsElement = screen.getByTestId(
        "personal-info-buttons"
    );

    expect(personalInfoButtonsElement).toBeInTheDocument();

    const downloadCVButton = screen.getByRole("link", { name: /download cv/i });
    const contactMeButton = screen.getByRole("link", { name: /contact me/i });

    expect(downloadCVButton).toBeInTheDocument();
    expect(contactMeButton).toBeInTheDocument();
});
