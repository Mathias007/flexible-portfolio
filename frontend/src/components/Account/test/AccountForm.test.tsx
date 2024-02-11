import { render, screen } from "@testing-library/react";
import { AccountForm } from "..";

test("renders the AccountForm component", () => {
    render(<AccountForm />);
    const accountForm = screen.getByTestId("account-form");

    expect(accountForm).toBeInTheDocument();

    const loginForm = screen.getByTestId("login-form");
    const registerForm = screen.getByTestId("register-form");

    expect(loginForm).toBeInTheDocument();
    expect(registerForm).toBeInTheDocument();
});
