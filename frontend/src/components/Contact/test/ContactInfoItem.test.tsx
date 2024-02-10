import { render, screen } from "@testing-library/react";
import { ContactInfoItem } from "..";

import { IContactInfoData } from "../../../data/contact.data";

const mockContactInfoItem: IContactInfoData = {
    id: 1,
    label: "Address",
    info: "123 Main Street, City, Country",
    icon: "location",
};

test("renders a contact info item correctly", () => {
    render(<ContactInfoItem {...mockContactInfoItem} />);
    const contactInfoItem = screen.getByTestId("contact-info-item");

    expect(contactInfoItem).toBeInTheDocument();

    const icon = screen.getByTestId("contact-icon");
    const label = screen.getByText(mockContactInfoItem.label);
    const info = screen.getByText(mockContactInfoItem.info);

    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(info).toBeInTheDocument();
});
