import { render, screen } from "@testing-library/react";
import { PersonalInfoItem } from "..";

test("renders the PersonalInfoItem component correctly", () => {
    const label = "Test Label";
    const value = "Test Value";

    render(<PersonalInfoItem label={label} value={value} />);
    const personalInfoItem = screen.getByTestId("personal-info-item");

    expect(personalInfoItem).toBeInTheDocument();

    const labelElement = screen.getByText(`${label}:`);
    const valueElement = screen.getByText(value);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
});
