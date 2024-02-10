import { render, screen } from "@testing-library/react";
import { ContactTitle } from "..";

test("renders the contact title correctly", () => {
    render(<ContactTitle />);
    const contactTitle = screen.getByTestId("contact-title");

    expect(contactTitle).toBeInTheDocument();

    const title = screen.getByText("Contact Me");

    expect(title).toBeInTheDocument();
});
