import { render, screen } from "@testing-library/react";
import { ContactInfoItem } from "..";

import { contactModels } from "../../../config/models";
import { MemoryRouter } from "react-router-dom";

const mockContactInfoItem: contactModels.IContactInfoData = {
    _id: 1,
    label: "Address",
    info: "123 Main Street, City, Country",
    icon: "location",
};

test("renders a contact info item correctly", () => {
    render(
        <MemoryRouter>
            <ContactInfoItem {...mockContactInfoItem} />
        </MemoryRouter>
    );

    const contactInfoItem = screen.getByTestId("contact-info-item");

    expect(contactInfoItem).toBeInTheDocument();

    const icon = screen.getByTestId("contact-icon");
    const label = screen.getByText(mockContactInfoItem.label);
    const info = screen.getByText(mockContactInfoItem.info);

    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(info).toBeInTheDocument();
});
