import { render, screen } from "@testing-library/react";
import { Contact } from "..";

import { contactModels } from "../../../models";

const mockContactInfoData: contactModels.IContactInfoData[] = [
    {
        _id: 1,
        label: "Address",
        info: "123 Main Street, City, Country",
        link: "https://test.pl",
        icon: "location",
    },
    { _id: 2, label: "Email", info: "example@example.com", icon: "email" },
];

test("renders the contact section correctly", () => {
    render(<Contact />);
    const contactSection = screen.getByTestId("contact-section");

    expect(contactSection).toBeInTheDocument();

    const title = screen.getByTestId("contact-title");
    const infoItems = screen.getAllByTestId("contact-info-item");
    const form = screen.getByTestId("contact-form");

    expect(title).toBeInTheDocument();
    expect(infoItems.length).toBe(mockContactInfoData.length * 2);
    expect(form).toBeInTheDocument();
});
