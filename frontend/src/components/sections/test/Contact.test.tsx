import { render, screen } from "@testing-library/react";
import { Contact } from "..";

import { contactModels } from "../../../models";
import { MemoryRouter } from "react-router-dom";

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
    render(
        <MemoryRouter>
            <Contact />
        </MemoryRouter>
    );
    const contactSection = screen.getByTestId("contact-section");

    expect(contactSection).toBeInTheDocument();

    const title = screen.getByTestId("title");
    const contactInfo = screen.getByTestId("contact-info");
    const form = screen.getByTestId("contact-form");

    expect(title).toBeInTheDocument();
    expect(contactInfo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
});
