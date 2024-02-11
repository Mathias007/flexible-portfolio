import { render, screen } from "@testing-library/react";
import { ContactSectionHeading } from "..";

const mockHeading = {
    title: "Have You Any Questions?",
    subtitle: "I'M AT YOUR SERVICES",
};

test("renders a contact section heading correctly", () => {
    render(<ContactSectionHeading {...mockHeading} />);
    const contactTitle = screen.getByTestId("contact-main-title");
    const contactSubtitle = screen.getByTestId("contact-subtitle");

    expect(contactTitle).toBeInTheDocument();
    expect(contactSubtitle).toBeInTheDocument();

    expect(contactTitle).toHaveTextContent(mockHeading.title);
    expect(contactSubtitle).toHaveTextContent(mockHeading.subtitle);
});
