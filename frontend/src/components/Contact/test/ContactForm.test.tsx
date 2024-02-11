import { render, screen } from "@testing-library/react";
import { ContactForm } from "..";

test("renders the contact form correctly", () => {
    render(<ContactForm />);
    const contactForm = screen.getByTestId("contact-form");

    expect(contactForm).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjectInput = screen.getByPlaceholderText("Subject");
    const messageInput = screen.getByPlaceholderText("Message");
    const submitButton = screen.getByText("Send Message");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
