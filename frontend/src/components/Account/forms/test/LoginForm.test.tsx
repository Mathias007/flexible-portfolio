import { render, screen } from "@testing-library/react";

import { LoginForm } from "..";

test("renders the LoginForm component", () => {
    render(<LoginForm />);
    const loginForm = screen.getByTestId("login-form");

    expect(loginForm).toBeInTheDocument();

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("submit-button");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});
