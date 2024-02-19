import { render, screen } from "@testing-library/react";
import { ContactInfo } from "..";

import { contactModels } from "../../../models";
import { MemoryRouter } from "react-router-dom";

const mockContactInfoData: contactModels.IContactInfoData[] = [
    {
        _id: 1,
        label: "Address",
        info: "123 Main Street, City, Country",
        icon: "location",
    },
    { _id: 2, label: "Email", info: "example@example.com", icon: "email" },
];

test("renders ContactInfo component correctly", () => {
    render(
        <MemoryRouter>
            <ContactInfo contactInfoData={mockContactInfoData} />
        </MemoryRouter>
    );

    const contactInfo = screen.getByTestId("contact-info");
    expect(contactInfo).toBeInTheDocument();

    const contactInfoItems = screen.getAllByTestId("contact-info-item");
    expect(contactInfoItems.length).toBe(mockContactInfoData.length);

    mockContactInfoData.forEach((contact, index) => {
        const item = contactInfoItems[index];
        expect(item).toHaveTextContent(contact.label);
        expect(item).toHaveTextContent(contact.info);
    });

    const contactIcons = screen.getAllByTestId("contact-icon");
    expect(contactIcons.length).toBe(mockContactInfoData.length);
});
