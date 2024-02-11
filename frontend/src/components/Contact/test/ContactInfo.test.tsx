import { render, screen } from "@testing-library/react";
import { ContactInfo } from "..";

import { contactModels } from "../../../models";

const mockContactInfoData: contactModels.IContactInfoData[] = [
    {
        id: 1,
        label: "Address",
        info: "123 Main Street, City, Country",
        icon: "location",
    },
    { id: 2, label: "Email", info: "example@example.com", icon: "email" },
];

test("renders ContactInfo component correctly", () => {
    render(<ContactInfo contactInfoData={mockContactInfoData} />);

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
