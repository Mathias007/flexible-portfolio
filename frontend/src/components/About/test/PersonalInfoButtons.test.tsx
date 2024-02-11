import { render, screen } from "@testing-library/react";
import { PersonalInfoButtons } from "..";

test("renders the PersonalInfoButtons component correctly", () => {
    render(<PersonalInfoButtons />);
    const personalInfoButtonsElement = screen.getByTestId(
        "personal-info-buttons"
    );

    expect(personalInfoButtonsElement).toBeInTheDocument();

    const downloadCVButton = screen.getByRole("link", { name: /download cv/i });
    const hireMeButton = screen.getByRole("link", { name: /hire me/i });

    expect(downloadCVButton).toBeInTheDocument();
    expect(hireMeButton).toBeInTheDocument();
});
