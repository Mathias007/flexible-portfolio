import { render, screen } from "@testing-library/react";

import { RegisterForm } from "..";

test("renders the RegisterForm component", () => {
    render(<RegisterForm />);
    const registerForm = screen.getByTestId("register-form");

    expect(registerForm).toBeInTheDocument();

    const nameInput = screen.getByTestId("name-input");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
